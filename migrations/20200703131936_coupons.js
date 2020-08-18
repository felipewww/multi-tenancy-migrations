
exports.up = function(knex) {
    return knex.schema
        .createTable('coupons', function (table) {
            table.increments('id');
            table.string('title')
            table.text('icon')
            table.text('description')
            // table.string('color_text');
            // table.string('color_bg');
            table.string('code');
            table.integer('discount');
            table.date('valid_thru')

            table.integer('usage_limit').nullable()

            table.integer('usage_count')
                .notNullable()
                .defaultTo(0)

            // todo
            // table.integer('max_usage_per_customer')
            //     .nullable()

            table.boolean('status')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("coupons")
};
