
exports.up = function(knex) {
    return knex.schema
      .createTable('sale_discount_from_unit', function (table) {
          table.integer('sale_id')
                  .unique()
                  .unsigned()
                  .index()
                  .references('id')
                  .inTable('sales')
                  .notNullable()
                  .onDelete('CASCADE')

            table.integer('discount');
            table.integer('from_unit');

            table.timestamps(true, true);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable("sale_discount_from_unit")
};
