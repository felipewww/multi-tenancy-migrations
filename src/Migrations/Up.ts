import Knex from "knex";
import {Migrator} from "./Migrator";
import {ITenantSettings} from "../TenantsModel";

export class Up extends Migrator {
    constructor(
        private seeding?: boolean
    ) {
        super();
    }

    protected async _run(builder: Knex, tenantSettings: ITenantSettings): Promise<any> {
        return new Promise((resolve, reject) => {
            return builder.migrate.latest()
                .then(async () => {
                    if (this.seeding) {
                        await builder.seed.run();
                    }

                    resolve();
                })

        })
    }
}
