const permissionsFactory = require("../seeds_factories/users_permissions_factory")

exports.seed = function (knex) {
    const groups = [
        { groupId: 1, permissions: permissionsFactory.permissionsIds() },
        { groupId: 2, permissions: permissionsFactory.permissionsIds([1,2,4]) },
        { groupId: 3, permissions: permissionsFactory.permissionsIds([6]) },
        { groupId: 4, permissions: permissionsFactory.permissionsIds([5]) },
    ];

    let parsed = [];

    groups.forEach(groupInfo => {
        groupInfo.permissions.forEach(permissionId => {
            parsed.push({
                permission_group_id: groupInfo.groupId,
                permission_id: permissionId,
            })
        })
    })

    return knex('permission_into_group').del()
        .then(function () {
            // Inserts seed entries
            return knex('permission_into_group').insert(parsed);
        });
};
