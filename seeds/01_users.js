var faker = require('faker-br');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, firstname: 'felipe', lastname: 'barreiros', username: 'felipewww@outlook.com.br', password: '123123'}
      ]);
    });
};
