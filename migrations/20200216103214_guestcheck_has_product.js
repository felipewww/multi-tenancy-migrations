
exports.up = function(knex) {
  return knex.schema
    .createTable('guestcheck_has_product', function (table) {
      table.boolean('status');

      table.decimal('price').nullable();

      table.integer('product_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('products')
        .notNullable()
        .onDelete('RESTRICT')

      table.integer('guestcheck_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('guestchecks')
        .notNullable()
        .onDelete('RESTRICT')

      table.primary(['product_id', 'guestcheck_id']);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable("guestcheck_has_product")
};
