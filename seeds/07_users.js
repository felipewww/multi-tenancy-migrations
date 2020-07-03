var faker = require('faker-br');

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {
                    id: 1,
                    firstname: 'felipe',
                    lastname: 'barreiros',
                    username: 'felipewww@outlook.com.br',
                    password: '123123',
                    permissions_group_id: 1,
                },
                {
                    id: 2,
                    firstname: 'Super ajudante',
                    lastname: '',
                    username: 'bracodireito@promosimples.com.br',
                    password: '123123',
                    permissions_group_id: 2,
                },
                {
                    id: 3,
                    firstname: 'Marketeiro',
                    lastname: 'Ninja',
                    username: 'marketeiro@promosimples.com.br',
                    password: '123123',
                    permissions_group_id: 3,
                },
                {
                    id: 4,
                    firstname: 'Operador',
                    lastname: 'Caixa',
                    username: 'operador@promosimples.com.br',
                    password: '123123',
                    permissions_group_id: 4,
                },
            ]);
        });
};
