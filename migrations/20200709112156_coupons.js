
exports.up = function(knex) {
    return knex.schema
        .createTable('coupons', function (table) {
            table.increments('id');
            table.integer('discount');
            table.integer('from');
            table.boolean('status')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("coupons")
};
