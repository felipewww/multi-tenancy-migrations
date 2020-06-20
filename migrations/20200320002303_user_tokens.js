exports.up = function(knex) {
    return knex.schema
            .createTable('user_tokens', function (table) {
                table.increments('id');

                table.integer('user_id')
                        .unsigned()
                        .index()
                        .references('id')
                        .inTable('users')
                        .onDelete('CASCADE')
                        .onUpdate('CASCADE');

                table.text('app_code_name').nullable()
                table.text('app_version').nullable()
                table.text('platform').nullable()
                table.text('user_agent').nullable()
                table.text('token').nullable()

                table.timestamps();
            })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_tokens")
};
