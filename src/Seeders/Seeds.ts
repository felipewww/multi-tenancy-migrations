import {Runner} from "../Runner";
import yargs from "yargs";
import {RunnerAction} from "../RunnerAction";
import {Up} from "../Seeders/Up";
import {ITenantSettings} from "../TenantsModel";

export const seedsOrdered = [
    'productCategories.js',
    'products.js',
    'modules.js',
    'permissions.js',
    'permissions_groups.js',
    'permission_into_group.js',
    'users.js',
    'user_has_module.js',
];

export class Seeds extends Runner {
    async handle(argv: yargs.Arguments<any>): Promise<void> {
        let runnerAction: RunnerAction;
        const tenants: Array<ITenantSettings> = await this.model.all();

        switch (argv.action) {
            case 'up':
                runnerAction = new Up();
                break;

            case 'down':
                throw new Error("Not implemented.");

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
