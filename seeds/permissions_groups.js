
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('permissions_groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('permissions_groups').insert([
        { id: 1, title: 'Root', description: 'Acesso ilimitado a todos os recursos' },
        { id: 2, title: 'Braço direito', description: 'Acesso a administração com alguns limites' },
        { id: 3, title: 'Marketing', description: 'Acesso apenas as ferramentas de divulgação' },
        { id: 4, title: 'Operador', description: 'Acesso somente ao app operador (caixa)' },
      ]);
    });
};
