exports.up = function(knex) {
    return knex.schema
        .createTable('bi_bridge_customer_tag', function (table) {
            table.increments('sk');
            // table.integer('fk').notNullable();

            table.integer('bi_dim_customer_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_customers')
                .notNullable()
                .onDelete('CASCADE')

            table.integer('bi_dim_customertag_sk')
                .unsigned()
                .index()
                .references('sk')
                .inTable('bi_dim_customertags')
                .notNullable()
                .onDelete('CASCADE')

            table.dateTime('created_at').notNullable();
            table.dateTime('invalid_at').nullable();
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("bi_bridge_customer_tag")
};
