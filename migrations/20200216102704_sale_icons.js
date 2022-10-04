exports.up = function (knex) {
    return knex.schema
        .createTable('sale_icons', function (table) {
            table.increments('id');
            table.text('src').notNullable();
            table.text('storage_path').notNullable()
            table.string('ext', 10).notNullable()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("sale_icons")
};
