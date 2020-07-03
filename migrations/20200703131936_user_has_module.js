exports.up = function (knex) {
    return knex.schema
        .createTable('user_has_module', function (table) {

            table.integer('user_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('users')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('module_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('modules')
                .notNullable()
                .onDelete('CASCADE')

            table.primary(['user_id', 'module_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("user_has_module")
};
