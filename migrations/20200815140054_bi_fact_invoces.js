exports.up = function(knex) {
    return knex.schema
        .createTable('bi_fact_invoices', function (table) {
            table.increments('id');

            table.integer('bi_dim_customer_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_customers')
                .notNullable()
                .onDelete('RESTRICT')

            table.float('total_items', 8, 2);

            table.float('cashback_percent', 8, 2).nullable();
            table.float('cashback_total', 8, 2).nullable();

            table.float('discount_percent', 8, 2).nullable();
            table.float('discount_total', 8, 2).nullable();

            table.float('total', 8, 2);
            table.float('coupons', 8, 2).nullable();

            table.dateTime('created_at').notNullable();
            // table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_fact_invoices")
};
