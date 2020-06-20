
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_categories').insert([
        {id: 1, title: 'comidas'},
        {id: 2, title: 'bebidas'},
        {id: 3, title: 'serviços'}
      ]);
    });
};
