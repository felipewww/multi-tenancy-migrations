
exports.up = function(knex) {
  return knex.schema
    .createTable('permissions_groups', function (table) {
      table.increments('id');
      table.string('title', 45).notNullable();
      table.text('description').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("permissions_groups")
};
