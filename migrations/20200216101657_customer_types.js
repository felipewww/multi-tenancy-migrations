
exports.up = function(knex) {
  return knex.schema
    .createTable('customer_types', function (table) {
      table.increments('id');
      table.string('title', 45).notNullable();
      table.text('icon_src').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("customer_types")
};
