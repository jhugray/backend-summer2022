const Product = require('./Product');
const Category = require('./Category');


// a Product belongs to a Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})

// A Category has (/can have) many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})


//export Product & Category models
module.exports = { Product, Category };