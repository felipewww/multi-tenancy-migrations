import Knex from "knex";
import {Migrator} from "./Migrator";
import {ITenantSettings} from "../TenantsModel";

export class Down extends Migrator {
    protected async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        return builder.migrate.rollback({}, true);
    }
}
