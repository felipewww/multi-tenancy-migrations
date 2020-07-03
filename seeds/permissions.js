const permissionsFactory = require("../seeds_factories/users_permissions_factory")

exports.seed = function (knex) {

    return knex('permissions').del()
        .then(function () {
            return knex('permissions').insert(permissionsFactory.permissionsParsed());
        });
};
