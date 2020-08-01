
exports.up = function(knex) {
    return knex.schema
        .createTable('loyalty_card_rewards_product', function (table) {
            table.boolean('status');

            table.decimal('price').nullable();

            table.integer('product_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('products')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('loyalty_card_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('loyalty_cards')
                .notNullable()
                .onDelete('CASCADE')

            table.timestamp('created_at').notNullable();

            table.integer('valid_thru').notNullable(); //validade em dias após a entrega do prêmio

            table.primary(['product_id', 'loyalty_card_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("loyalty_card_rewards_product")
};
