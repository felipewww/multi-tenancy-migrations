import yargs, {Arguments} from "yargs";
import Knex from "knex";
import {ITenantSettings, TenantsModel} from "../TenantsModel";
import {Migrator} from "./Migrator";
import {Up} from "./Up";
import {Down} from "./Down";

export class Migrations {

    private tenants: Array<ITenantSettings> = [];
    private model: TenantsModel;

    constructor(
        private yargs: yargs.Argv
    ) {
        this.model = new TenantsModel();
    }

    handle(argv: Arguments<any>){
        let migrator: Migrator;

        switch (argv.action) {
            case 'up':
                migrator = new Up(argv.seed);
                break;

            case 'down':
                if (process.env.APP_ENV != 'dev' && process.env.APP_ENV != 'hml') {
                    console.log("Can't run DOWN for production. Please run it's command manually for a specific database or create your own script!".red.bold)
                    process.exit(128);
                    throw new Error("Can't run DOWN for production");
                }

                migrator = new Down();

                break;

            default:
                console.log('\n');
                console.log("No action selected. Please select one".red.bold)
                console.log('\n');
                this.yargs.showHelp();
                break;
        }

        if (migrator) {
            this.executeMigrator(migrator)
                .then(res => {
                    console.log('execution SUCCESS!'.bgGreen.black.bold)
                    process.exit(0);
                })
                .catch(err => {
                    console.log('execution ERROR!'.bgRed.white.bold)
                    process.exit(127);
                })
        }
    }

    private async executeMigrator(migrator: Migrator) {
        this.tenants = await this.model.all();

        for (const tenant of this.tenants) {
            const tenantBuilder = this.makeTenantBuilder(tenant);

            try{
                const result = await migrator.run(tenantBuilder, tenant);
                // console.log('result FINISHED!'.bgGreen.white.bold);
                // console.log(result);
            } catch (e) {
                // @ts-ignore
                console.log('Error while run migration for: '.red + " " + tenant.connection.database.white)
                console.log(e)
            }
        }
    }

    private makeTenantBuilder(currentClient: ITenantSettings): Knex {
        return Knex({
            client: 'mysql2',
            connection: currentClient.connection,
            pool: {
                min: 0,
                max: 1
            },
            migrations: {
                directory: './migrations'
            },
            seeds: {
                directory: './seeds'
            }
        });
    }
}
