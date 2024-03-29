import Knex from "knex";
import {ITenantSettings} from "../TenantsModel";
import {RunnerAction} from "../RunnerAction";

export class Down extends RunnerAction {
    protected async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        return builder.migrate.rollback({}, true);
    }
}
