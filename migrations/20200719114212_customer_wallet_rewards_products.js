exports.up = function(knex) {
    return knex.schema
        .createTable('customer_wallet_rewards_products', function (table) {
            table.increments('id');

            table.integer('product_id') //apenas referencia do produto (se for invoice)

            table.dateTime('created_at')
            table.dateTime('valid_thru')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_wallet_rewards_products")
};
