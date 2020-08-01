
exports.up = function(knex) {
    return knex.schema
        .createTable('customer_tags', function (table) {
            table.increments('id');
            table.string('title')
            table.text('icon')
            table.string('color_text');
            table.string('color_bg');
            table.text('description').nullable()
            table.timestamps();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("customer_tags")
};
