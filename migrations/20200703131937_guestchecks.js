exports.up = function (knex) {
    return knex.schema
        .createTable('guestchecks', function (table) {
            table.increments('id');
            table.boolean('status');

            table.integer('customer_id')
                .unsigned()
                .index()
                .references('id')
                .inTable('customers')
                .notNullable()
                .onDelete('RESTRICT')

            table.timestamps(true, true);
            table.dateTime('finished_at').nullable();
        })
};

exports.down = function (knex) {
    return knex.schema.dropTable("guestchecks")
};
