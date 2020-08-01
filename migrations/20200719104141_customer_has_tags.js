
exports.up = function(knex) {
    return knex.schema
        .createTable('customer_has_tags', function (table) {

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('customer_tag_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customer_tags')
                .notNullable()
                .onDelete('CASCADE')

            table.timestamp('created_at');

            table.primary(['customer_id', 'customer_tag_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_has_tags")
};
