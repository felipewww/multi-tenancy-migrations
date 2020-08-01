
exports.up = function(knex) {
    return knex.schema
        .createTable('loyalty_cards', function (table) {
            table.increments('id');

            table.string('title', 45)

            table.boolean('status');

            table.integer('stamps_count')

            table.date('valid_thru')

            table.integer('usage_limit').nullable()

            // todos podem pegar ou precisa entregar?
            table.boolean('is_private')

            //valor em dinheiro de cashback
            table.float('reward_cashback', 8, 2).nullable();

            //valor em percentual de desconto
            table.float('reward_discount', 8, 2).nullable();

            table.timestamps(true, true);
        })

    // coupon, products
};

exports.down = function(knex) {
    return knex.schema.dropTable("loyalty_cards")
};
