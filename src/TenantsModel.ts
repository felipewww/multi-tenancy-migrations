import {ConnectionConfigProvider, StaticConnectionConfig} from "knex";

export interface ITenantSettings {
    connection: StaticConnectionConfig | ConnectionConfigProvider
    // connection: StaticConnectionConfig
}

export class TenantsModel {
    async all(): Promise<Array<ITenantSettings>> {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    connection: {
                        host : '0.0.0.0',
                        user : 'root',
                        password : 'secret',
                        database : 'paylite',
                        port: 33061
                    }
                },

                // {
                //     connection: {
                //         host : 'promosimples-db',
                //         user : 'root',
                //         password : 'secret',
                //         database : 'paylite',
                //         port: 3306
                //     }
                // },

                // {
                //     connection: {
                //         host : 'paylite-db',
                //         user : 'root',
                //         password : 'secret',
                //         database : 'onix',
                //         port: 3306
                //     }
                // }
            ])
        })
    }
}
