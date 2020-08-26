exports.up = function (knex) {
    return knex.schema
        .createTable('sale_product', function (table) {
            table.integer('product_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('products')
                .notNullable()
                .onDelete('CASCADE')
                .unique()

            table.integer('sale_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('sales')
                .notNullable()
                .onDelete('CASCADE');

            // table.boolean('status');

            // table.decimal('price').nullable();

            table.primary(['product_id', 'sale_id']);
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTable("sale_product")
};
