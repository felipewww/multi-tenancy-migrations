exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_customertags', function (table) {
            table.increments('sk');
            table.integer('fk').notNullable();

            table.text('title');

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_customertags")
};
