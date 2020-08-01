
exports.up = function(knex) {
    return knex.schema
        .createTable('customer_has_loyalty_cards', function (table) {

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('loyalty_card_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('loyalty_cards')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('stamps_count');

            table.boolean('status')

            table.dateTime('created_at').notNullable();
            table.dateTime('finished_at').nullable();

            table.dateTime('last_stamp_at').notNullable();

            table.primary(['customer_id', 'loyalty_card_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_has_loyalty_cards")
};
