exports.up = function (knex) {
    return knex.schema
        .createTable('invoice_has_product', function (table) {
            // table.boolean('status');

            table.decimal('price').nullable();

            table.integer('product_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('products')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('invoice_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('invoices')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('qtty');

            table.dateTime('created_at').notNullable();

            table.primary(['product_id', 'invoice_id']);
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable("invoice_has_product")
};
