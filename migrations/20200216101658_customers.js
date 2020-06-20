
exports.up = function(knex) {
  return knex.schema
    .createTable('customers', function (table) {
      table.increments('id');
      table.string('full_name', 255).notNullable();
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
      table.text('photo').nullable();

      table.integer('customer_type_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('customer_types')
        .nullable()
        .onDelete('SET NULL')

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("customers")
};
