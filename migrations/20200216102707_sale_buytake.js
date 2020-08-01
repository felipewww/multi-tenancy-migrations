exports.up = function (knex) {
    return knex.schema
        .createTable('sale_buytake', function (table) {
            table.integer('sale_id')
                .unique()
                .unsigned()
                .index()
                .references('id')
                .inTable('sales')
                .notNullable()
                // .nullable()
                .onDelete('CASCADE');

            table.integer('buy');
            table.integer('take');

            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable("sale_buytake")
};
