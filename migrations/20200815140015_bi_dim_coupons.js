exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_coupons', function (table) {
            table.increments('sk');
            table.integer('fk').notNullable();

            table.text('code');
            table.float('discount', 8, 2);

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_coupons")
};
