exports.up = function (knex) {
    return knex.schema
        .createTable('invoices', function (table) {
            table.increments('id');

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('RESTRICT')
                .unique()

            table.string('external_id').nullable()

            table.integer('cashier_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('users')
                .nullable()
                .onDelete('RESTRICT')

            // creation_type CUSTOMER / CASHIER - comanda criada pelo cliente ou pelo atendente?
            table
                .enum('creation_type', [1,2])
                .notNullable();

            // permite que o cliente adicione itens na comanda?
            table
                .boolean('allow_customer_order')
                .notNullable();

            table.timestamps(true, true);
            table.dateTime('finished_at').nullable();
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable("invoices")
};
