exports.up = function(knex) {
    return knex.schema
        .createTable('customer_wallet_cashback', function (table) {
            table.increments('id');
            // table.integer('customer_cashback_from_id')
            //     .unsigned()
            //     .index()
            //     .references('id')
            //     .inTable('customer_cashback_from')
            //     .notNullable()
            //     .onDelete('RESTRICT')

            table.float('spent', 8, 2).notNullable() //quanto gastou
            table.float('cashback', 8, 2).notNullable() //quanto ganhou

            // table.integer('foreign_key_id') //apenas referencia do guestcheck ou do loyalty card
            // table.integer('product_id') //apenas referencia do produto (se for guestcheck)

            table.dateTime('created_at')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_wallet_cashback")
};
