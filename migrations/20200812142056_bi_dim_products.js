exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_products', function (table) {
            table.increments('sk');
            table.integer('fk');

            table.string('name')
            table.float('price', 8, 2);

            table.integer('category_id')
            table.string('category_name')
            // table.integer('bi_dim_productcategory_sk')
            //     .unsigned()
            //     .index()
            //     .references('sk')
            //     .inTable('bi_dim_productcategory')
            //     .notNullable()
            //     .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_products")
};
