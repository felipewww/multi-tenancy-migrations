
exports.up = function(knex) {
    return knex.schema
        .createTable('categorygroups_has_category', function (table) {

            table.integer('product_category_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('product_categories')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('categorygroup_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('categorygroups')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();

            table.primary(['product_category_id', 'categorygroup_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("categorygroups_has_category")
};
