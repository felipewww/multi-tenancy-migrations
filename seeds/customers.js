
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
          {
              full_name: 'Regina rosa',
              email: 're@gina.com',
              password: '123',
              photo: 'asd',
              // account_balance: '',
              customer_type_id: 1,
          }
      ]);
    });
};
