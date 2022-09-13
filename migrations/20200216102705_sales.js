exports.up = function (knex) {
    return knex.schema
        .createTable('sales', function (table) {
            table.increments('id');
            table.string('title', 45).notNullable();
            table.boolean('status').notNullable();
            table.text('icon').notNullable();

            // table.integer('cashback').nullable();
            // table.integer('discount').nullable();

            table.timestamps(true, true);
            table.dateTime('deleted_at')
                .nullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("sales")
};
