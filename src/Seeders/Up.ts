import Knex from "knex";
import {ITenantSettings} from "../TenantsModel";
import {RunnerAction} from "../RunnerAction";
import {seedsOrdered} from "./Seeds";

export class Up extends RunnerAction {
    protected async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        for(let filePath of seedsOrdered) {
            console.log('running filePath')
            console.log(filePath)
            await builder.seed.run({
                specific: filePath
            })
        }
    }
}
