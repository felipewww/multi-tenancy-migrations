
exports.up = function(knex) {
    return knex.schema
        .createTable('customer_tags', function (table) {
            table.increments('id');
            table.string('title').notNullable()
            table.text('icon').notNullable()
            table.string('color_text').notNullable();
            table.string('color_bg').notNullable();
            table.text('description').nullable()
            table.timestamps();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_tags")
};
