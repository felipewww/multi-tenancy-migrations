
exports.up = function(knex) {
    return knex.schema
        .createTable('coupons', function (table) {
            table.increments('id');
            // table.string('title')
            table.text('icon')
            table.text('description')
            table.enum('type', [1,2]) // COMMON or CASHBACK
            // table.string('color_text');
            // table.string('color_bg');
            table.string('code');
            table.integer('discount');
            table.enum('discount_type', [1,2]) // percent or value
            table.date('valid_thru')

            table.integer('usage_limit').nullable()
            table.integer('usage_count')
                .notNullable()
                .defaultTo(0)

            table.integer('customer_usage_limit').nullable()

            // todo
            // table.integer('max_usage_per_customer')
            //     .nullable()

            table.boolean('status')
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("coupons")
};
