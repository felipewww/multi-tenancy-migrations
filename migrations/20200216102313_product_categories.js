exports.up = function (knex) {
    return knex.schema
        .createTable('product_categories', function (table) {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.string('exhibition_title', 45).notNullable();
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("product_categories")
};

