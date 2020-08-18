exports.up = function(knex) {
    return knex.schema
        .createTable('bi_bridge_invoice_coupon', function (table) {
            table.increments('sk');
            table.integer('fk').notNullable();

            table.integer('fact_invoices_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('bi_fact_invoices')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('bi_dim_customer_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_customers')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_bridge_invoice_coupon")
};
