exports.up = function(knex) {
    return knex.schema
        .createTable('bi_dim_customers', function (table) {
            table.increments('sk');
            table.integer('fk');

            table.string('full_name');
            table.integer('type_id');
            table.string('type_title');
            table.text('tags_ids').nullable();
            table.text('tags_titles').nullable();

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_dim_customers")
};
