import Knex from "knex";
import {ITenantSettings} from "./TenantsModel";

export abstract class RunnerAction {
    async run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        const msg = 'running ' + this.constructor.name;
        console.log(msg.green.bold)

        if ("database" in tenantSettings.connection) {
            console.log('for tenant ' + tenantSettings.connection.database)
        }

        return this._run(builder, tenantSettings)
    }

    protected abstract _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any>;

    public static makeTenantBuilder(tenant: ITenantSettings): Knex {
        return Knex({
            client: 'mysql2',
            connection: tenant.connection,
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

    public async execute(tenants: Array<ITenantSettings>) {
        for (const tenant of tenants) {
            const tenantBuilder = RunnerAction.makeTenantBuilder(tenant);

            try{
                const result = await this.run(tenantBuilder, tenant);
                console.log('result FINISHED!'.bgGreen.black.bold);
                console.log(result);
            } catch (e) {
                // @ts-ignore
                console.log('Error while run for: '.red + " " + tenant.connection.database.white)
                console.log(e)
            }
        }
    }
}
