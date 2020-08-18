exports.up = function(knex) {
    return knex.schema
        .createTable('bi_fact_rating', function (table) {
            table.increments('id');

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_fact_rating")
};
