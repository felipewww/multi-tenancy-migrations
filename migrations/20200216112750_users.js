
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id');
      table.string('firstname', 45).notNullable();
      table.string('lastname', 45).notNullable();
      table.string('username', 45).notNullable();
      table.text('password').notNullable();

      table.integer('users_permissions_group_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('users_permissions_groups')
        .nullable()
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("users")
};
