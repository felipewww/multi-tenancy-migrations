exports.up = function(knex) {
    return knex.schema
        .createTable('bi_fact_sales', function (table) {
            table.increments('id');

            table.integer('bi_dim_product_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_products')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('bi_dim_sale_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_sales')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('bi_dim_customer_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_customers')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('bi_fact_invoice_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('bi_fact_invoices')
                .notNullable()
                .onDelete('RESTRICT')

            table.float('price_real', 8, 2);
            table.float('price_sold', 8, 2);
            table.float('discount', 8, 2);
            table.float('cashback', 8, 2);

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_fact_sales")
};
