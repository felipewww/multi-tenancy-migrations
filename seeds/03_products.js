exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('products').del()
        .then(function () {
            // Inserts seed entries
            return knex('products').insert([
                {
                    id: 1,
                    title: 'Coca-cola Lata',
                    description: null,
                    price: 6.50,
                    product_category_id: 2,
                },
                {
                    id: 2,
                    title: 'Pepsi Lata',
                    description: null,
                    price: 3.75,
                    product_category_id: 2,
                },
                {
                    id: 3,
                    title: 'Guaraná Lata',
                    description: null,
                    price: 4.25,
                    product_category_id: 2,
                },
                {
                    id: 4,
                    title: 'Esfiha',
                    description: null,
                    price: 3.00,
                    product_category_id: 1,
                },
                {
                    id: 5,
                    title: 'Coxinha com catupiry',
                    description: null,
                    price: 4.50,
                    product_category_id: 1,
                },
                {
                    id: 6,
                    title: 'Gorjeta',
                    description: null,
                    price: null,
                    product_category_id: 3,
                },
            ]);
        });
};
