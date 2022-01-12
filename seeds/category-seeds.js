//import Category model
const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Bowls',
  },
  {
    category_name: 'Mugs',
  },
  {
    category_name: 'Plates',
  },
  {
    category_name: 'Decorative',
  },
];

//seedCategories takes the categoryData array and bulk creates entries in the Category table
const seedCategories = () => Category.bulkCreate(categoryData);

//seedCategories function is exported - this is then imported into the seeds/index.js file which gets called to seed the tables
module.exports = seedCategories;
