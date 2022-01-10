// import needed parts of the sequelize library
const { Model, DataTypes } = require('sequelize');
// import the database connection from config.js
const sequelize = require('../config/connection.js');

// initialize Category model (table) by extending Sequelize's Model class
class Category extends Model {}

// set up fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      //can't be NULL, and allows validation to be added
      allowNull: false,
      validate: {
      //category_name length value must be between 1-100
        len: [1,100]
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
    modelName: 'category',
  }
);

module.exports = Category;
