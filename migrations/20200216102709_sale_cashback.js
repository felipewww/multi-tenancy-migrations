exports.up = function (knex) {
    return knex.schema
        .createTable('sale_cashback', function (table) {
            table.integer('sale_id')
                .unique()
                .unsigned()
                .index()
                .references('id')
                .inTable('sales')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('cashback');
            table.enum('type', [1,2]) // percent or value

            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable("sale_discount_from_unity")
};
