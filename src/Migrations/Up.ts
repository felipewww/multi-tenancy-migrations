import Knex from "knex";
import {ITenantSettings} from "../TenantsModel";
import {RunnerAction} from "../RunnerAction";

export class Up extends RunnerAction {
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
                        let result = await builder.seed.run();
                    }

                    resolve();
                })

        })
    }
}
