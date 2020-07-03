
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function (table) {
      table.increments('id');
      table.string('firstname', 45).notNullable();
      table.string('lastname', 45).notNullable();
      table.string('username', 45).notNullable();
      table.text('password').notNullable();

      table.integer('permissions_group_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('permissions_groups')
        // .nullable()
        .onDelete('RESTRICT')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("users")
};
