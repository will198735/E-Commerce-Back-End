// import important parts of sequelize library
const { Model, DataTypes, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      price: {
        type: Datatypes.DECIMAL, 
        allowNull: false,
        validate: {
          isDECIMAL: true
        }
  
      },
      stock: {
        type: Datatypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true
        }
      },
      category_id: {
        type: Datatypes.INTEGER,
        allowNull: true,
        references: { 
          model: 'category',
          key: 'id'
        }
      }
      
      
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
