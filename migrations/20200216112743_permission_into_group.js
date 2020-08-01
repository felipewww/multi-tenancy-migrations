exports.up = function (knex) {
    return knex.schema
        .createTable('permission_into_group', function (table) {

            // table.boolean('status');

            table.integer('permission_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('permissions')
                .notNullable()
                .onDelete('RESTRICT')

            table.integer('permission_group_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('permissions_groups')
                .notNullable()
                .onDelete('RESTRICT')

            table.primary(['permission_id', 'permission_group_id']);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("permission_into_group")
};
