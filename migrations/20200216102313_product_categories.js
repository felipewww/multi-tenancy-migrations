
exports.up = function(knex) {
  return knex.schema
    .createTable('product_categories', function (table) {
      table.increments('id');
      table.string('title', 45).notNullable();

      // table.integer('product_category_id')
      //   .unsigned()
      //   .index()
      //   .references('id')
      //   .inTable('product_categories')
      //   .nullable()
      //   .onDelete('SET NULL')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("product_categories")
};

