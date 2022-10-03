
exports.up = function(knex) {
    return knex.schema
        .createTable('sale_has_customer_tags', function (table) {

            table.integer('sale_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('sales')
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
    return knex.schema.dropTable("sale_has_customer_tags")
};
