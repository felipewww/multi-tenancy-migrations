
exports.up = function(knex) {
    return knex.schema
        .createTable('invoice_has_coupon', function (table) {

            table.integer('invoice_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('invoices')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('coupon_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('coupons')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();

            table.primary(['invoice_id', 'coupon_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("invoice_has_coupon")
};
