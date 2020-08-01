
exports.up = function(knex) {
    return knex.schema
        .createTable('guestcheck_has_coupon', function (table) {

            table.integer('guestcheck_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('guestchecks')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('coupon_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('coupons')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();

            table.primary(['guestcheck_id', 'coupon_id']);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("guestcheck_has_coupon")
};
