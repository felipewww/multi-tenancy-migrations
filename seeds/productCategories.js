
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_categories').insert([
        {id: 1, title: 'Comidas'},
        {id: 2, title: 'Bebidas'},
        {id: 3, title: 'Serviços'}
      ]);
    });
};
