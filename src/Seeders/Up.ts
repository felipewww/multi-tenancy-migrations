import Knex from "knex";
import {ITenantSettings} from "../TenantsModel";
import {RunnerAction} from "../RunnerAction";
import {seedsOrdered} from "./Seeds";

export class Up extends RunnerAction {
    protected async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        for(let filePath of seedsOrdered) {
            await builder.seed.run({
                specific: filePath
            })
        }
    }
}
