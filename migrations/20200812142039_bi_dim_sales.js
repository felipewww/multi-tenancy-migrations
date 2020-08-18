exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_sales', function (table) {
            table.increments('sk');
            table.integer('fk');

            table.integer('buy');
            table.integer('take');
            table.integer('from_unity_discount');
            table.integer('from_unity_unity');
            table.integer('at_unity_discount');
            table.integer('at_unity_unity');
            table.integer('cashback');
            table.integer('discount');
            table.text('title');

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_sales")
};
