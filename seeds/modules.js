
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modules').del()
    .then(function () {
      // Inserts seed entries
      return knex('modules').insert([
        {id: 1, name: 'Produtos'},
        {id: 2, name: 'Promoções'},
        {id: 3, name: 'Usuários'},
        {id: 4, name: 'Clientes'},
        {id: 5, name: 'Comandas'},
        {id: 6, name: 'Configurações do App'},
      ]);
    });
};
