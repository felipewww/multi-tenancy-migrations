
exports.up = function(knex) {
  return knex.schema
    .createTable('products', function (table) {
      table.increments('id');
      table.string('title', 45).notNullable();
      table.text('description').nullable();
      table.decimal('price').nullable();

      table.integer('product_category_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('product_categories')
        .nullable()
        .onDelete('SET NULL')

      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("products")
};
