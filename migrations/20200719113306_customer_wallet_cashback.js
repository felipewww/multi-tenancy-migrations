exports.up = function(knex) {
    return knex.schema
        .createTable('customer_wallet_cashback', function (table) {
            table.increments('id');

            table.float('spent', 8, 2).notNullable() //quanto gastou
            table.float('cashback', 8, 2).notNullable() //quanto ganhou

            table.dateTime('created_at')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_wallet_cashback")
};
