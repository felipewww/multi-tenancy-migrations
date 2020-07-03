exports.up = function (knex) {
    return knex.schema
        .createTable('modules', function (table) {
            table.increments('id');
            table.string('name', 45);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("modules")
};
