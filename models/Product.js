// import needed parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// import the database connection from config.js
const sequelize = require('../config/connection');

// initialize Product model (table) by extending Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //product_name length value must be between 1-100
        len: [1,100]
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        //validates to ensure price length is at least 1 character and that the price datatype is a decimal
        len: [1],
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //sets stock to 10 if no other value added
      defaultValue: 10,
      validate: {
        //validates that stock length is at least 1 character, and that it is a number
        len: [1],
        isNumeric: true
      }
    }
  },
  {
    sequelize,
    //createdAt/updatedAt timestamps not automatically added 
    timestamps: false,
    //doesn't pluralize table name
    freezeTableName: true,
    //uses underscore instead of camel case for table name
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;