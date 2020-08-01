exports.up = function (knex) {
    return knex.schema
        .createTable('product_medias', function (table) {
            table.increments('id');
            table.text('src').notNullable();

            table.integer('product_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('products')
                .nullable()
                .onDelete('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("product_medias")
};
