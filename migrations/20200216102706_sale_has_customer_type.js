exports.up = function (knex) {
    return knex.schema
        .createTable('sale_has_customer_type', function (table) {
            table.integer('customer_type_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customer_types')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('sale_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('sales')
                .notNullable()
                .onDelete('CASCADE');

            table.primary(['customer_type_id', 'sale_id']);
        })

};

exports.down = function (knex) {
    return knex.schema.dropTable("sale_has_customer_type")
};
