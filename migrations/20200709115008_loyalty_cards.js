
exports.up = function(knex) {
    return knex.schema
        .createTable('loyalty_cards', function (table) {
            table.increments('id');

            table.string('title', 45)

            table.boolean('status');

            table.integer('stamps_count')

            table.date('valid_thru')

            table.integer('usage_limit').nullable()

            table.boolean('is_private')

            table.timestamps(true, true);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("loyalty_cards")
};
