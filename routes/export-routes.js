const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;
const router = require('express').Router();
const { Product, Category } = require('../models');

// GET /export/products.csv endpoint
router.get('/products.csv', (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
  .then(dbProductData => {
   const csvStringifier = createCsvStringifier({
     //define the headers for the CSV
      header: [
        {id: 'id', title: 'Product ID'},
        {id: 'product_name', title: 'Product Name'},
        {id: 'price', title: 'Price'},
        {id: 'stock', title: 'Stock'},
        {id: 'category_id', title: 'Category ID'},
        {id: 'category_name', title: 'Category Name'}
      ]
    });
    // parse the dbProductData from the findAll request incl the category array
    const csvData = dbProductData.map(obj => {
      obj.category_name = obj.category.category_name; 
      return obj
    });
    //combine header and product data into one string, in comma seperated values
    const productCSV = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(csvData);
    //response file set up
    res.type("text/csv")
    res.setHeader('Content-Disposition', 'attachment; filename=Products.csv');
    res.send(productCSV);
  })
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

module.exports = router;