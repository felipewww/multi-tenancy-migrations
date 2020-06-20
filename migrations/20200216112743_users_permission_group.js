
exports.up = function(knex) {
  return knex.schema
    .createTable('users_permission_group', function (table) {

      table.boolean('status');

      table.integer('users_permissions_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('users_permissions')
        .notNullable()
        .onDelete('CASCADE')

      table.integer('users_permissions_group_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('users_permissions_groups')
        .notNullable()
        .onDelete('CASCADE')

      table.primary(['users_permissions_id', 'users_permissions_group_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("users_permission_group")
};
