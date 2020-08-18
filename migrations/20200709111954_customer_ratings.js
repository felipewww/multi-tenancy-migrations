exports.up = function (knex) {
    return knex.schema
        .createTable('customer_ratings', function (table) {

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('invoice_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('invoices')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('rating');

            table.text('feedback')

            table.dateTime('created_at').notNullable();

            table.primary(['customer_id', 'invoice_id']);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable("customer_ratings")
};
