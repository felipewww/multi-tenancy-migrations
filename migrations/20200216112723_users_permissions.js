
exports.up = function(knex) {
  return knex.schema
    .createTable('users_permissions', function (table) {
      table.increments('id');
      table.string('title', 45).notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("users_permissions")
};
