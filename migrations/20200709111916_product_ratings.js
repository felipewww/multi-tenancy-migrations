
exports.up = function(knex) {
    return knex.schema
        .createTable('product_ratings', function (table) {

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

            table.integer('guestcheck_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('guestchecks')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('rating');

            table.text('feedback')

            table.dateTime('created_at').notNullable();

            table.primary(['customer_id', 'product_id', 'guestcheck_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("product_ratings")
};
