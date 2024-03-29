import {Arguments} from "yargs";
import {Up} from "./Up";
import {Down} from "./Down";
import {Runner} from "../Runner";
import {RunnerAction} from "../RunnerAction";
import {ITenantSettings} from "../TenantsModel";

export class Migrations extends Runner {

    async handle(argv: Arguments<any>): Promise<void> {
        let runnerAction: RunnerAction;

        const tenants: Array<ITenantSettings> = await this.model.all();

        switch (argv.action) {
            case 'up':
                runnerAction = new Up(argv.seed);
                break;

            case 'down':
                if (process.env.APP_ENV != 'dev' && process.env.APP_ENV != 'hml') {
                    console.log("Can't run DOWN for production. Please run it's command manually for a specific database or create your own script!".red.bold)
                    process.exit(128);
                    throw new Error("Can't run DOWN for production");
                }
                runnerAction = new Down();
                break;

            default:
                console.log('\n');
                console.log("No action selected. Please select one".red.bold)
                console.log('\n');
                this.yargs.showHelp();
                return;
        }

        runnerAction.execute(tenants)
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
