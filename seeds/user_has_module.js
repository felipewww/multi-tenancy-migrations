exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('user_has_module').del()
        .then(function () {
            // Inserts seed entries
            return knex('user_has_module').insert([
                {user_id: 1, module_id: 1},
                {user_id: 1, module_id: 2},
                {user_id: 1, module_id: 3},
                {user_id: 1, module_id: 4},
                {user_id: 1, module_id: 5},
                {user_id: 1, module_id: 6},
                {user_id: 2, module_id: 1},
                {user_id: 2, module_id: 2},
                {user_id: 2, module_id: 4},
                {user_id: 3, module_id: 6},
                {user_id: 4, module_id: 5},
            ]);
        });
};
