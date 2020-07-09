
exports.up = function(knex) {
    return knex.schema
        .createTable('customer_favorites', function (table) {

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('product_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('products')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();

            table.primary(['customer_id', 'product_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_favorites")
};
