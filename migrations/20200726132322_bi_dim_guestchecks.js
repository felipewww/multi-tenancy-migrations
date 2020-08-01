exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_guestchecks', function (table) {
            table.increments('sk');
            table.integer('pk').notNullable();
            table.timestamp('created_at')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_guestchecks")
};
