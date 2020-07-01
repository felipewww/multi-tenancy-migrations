import Knex from "knex";
import {ITenantSettings} from "../TenantsModel";

export abstract class Migrator {
    async run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        const msg = 'running migrations ' + this.constructor.name;
        console.log(msg.green.bold)

        if ("database" in tenantSettings.connection) {
            console.log('for tenant ' + tenantSettings.connection.database)
        }

        return this._run(builder, tenantSettings)
    }

    protected abstract async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any>;
}
