//import Product model
const { Product } = require('../models');

const productData = [
  {
    product_name: 'Soup Bowl',
    price: 24,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Salad Bowl',
    price: 17.5,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Coffee Mug',
    price: 18,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'Handle-free Mug',
    price: 14,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: 'Serving Platter',
    price: 29.99,
    stock: 22,
    category_id: 3,
  },
  {
    product_name: 'Set of 4 Small Plates',
    price: 40,
    stock: 8,
    category_id: 3,
  },
  {
    product_name: 'Ring Holder',
    price: 12.5,
    stock: 8,
    category_id: 4,
  },
  {
    product_name: 'Large Vase',
    price: 30,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Small Vase',
    price: 19,
    stock: 8,
    category_id: 4,
  },
  {
    product_name: 'Female Figurine',
    price: 21,
    stock: 2,
    category_id: 4,
  },
];

//seedProducts takes the productData array and bulk creates entries in the Product table
const seedProducts = () => Product.bulkCreate(productData);

//seedProducts function is exported - this is then imported into the seeds/index.js file which gets called to seed the tables
module.exports = seedProducts;
