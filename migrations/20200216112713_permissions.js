exports.up = function (knex) {
    return knex.schema
        .createTable('permissions', function (table) {
            table.increments('id');
            table.string('title', 45).notNullable();

            table.integer('module_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('modules')
                .notNullable()
                .onDelete('RESTRICT')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("permissions")
};
