
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customer_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer_types').insert([
        {id: 1, title: 'comum', icon_src: 'teste.jpg'},
      ]);
    });
};
