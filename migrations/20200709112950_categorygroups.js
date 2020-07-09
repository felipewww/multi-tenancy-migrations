
exports.up = function(knex) {
    return knex.schema
        .createTable('categorygroups', function (table) {
            table.increments('id');
            table.string('title', 45)
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("categorygroups")
};
