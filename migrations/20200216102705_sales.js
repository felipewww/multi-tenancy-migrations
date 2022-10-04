exports.up = function (knex) {
    return knex.schema
        .createTable('sales', function (table) {
            table.increments('id');
            table.string('title', 45).notNullable();
            table.boolean('status').notNullable();

            table.integer('icon_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('sale_icons')
                .nullable()
                .onDelete('SET NULL')
                .onUpdate('CASCADE')

            table.timestamps(true, true);
            table.dateTime('deleted_at')
                .nullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("sales")
};
