
exports.up = function(knex) {
  return knex.schema
    .createTable('sale_guestcheck', function (table) {
      table.increments('id');
      table.boolean('status');

      table.string('title')

      table.decimal('discount').nullable();
      table.decimal('minimum_amount').nullable();

      table.integer('customer_type_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('customer_types')
        .nullable()
        .onDelete('RESTRICT')

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("sale_guestcheck")
};
