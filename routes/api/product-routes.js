const router = require('express').Router();
const { Product, Category } = require('../../models');
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

// GET /api/products endpoint
router.get('/', (req, res) => {
  //runs the findAll method on the Product model
  Product.findAll({
    //include product's associated cateogry
    include: [
      {
        model: Category,
        //returns only the category name instead of all the category info
        attributes: ['category_name']
      }
    ]
  })
  //returns data in JSON format
  .then(dbProductData => res.json(dbProductData))
  //error handling
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

//CSV EXPORT endpoint for all products
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
    // parse the dbProductData from the GET request incl the category array
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
  // error handling
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});










// GET /api/products/1 (1 = example id#)
router.get('/:id', (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id
    },
    include: [  //associated Category
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
  .then(dbProductData => {
    //if no product with that id, error message returned
    if (!dbProductData) {
      res.status(404).json({ message:'No product found with that ID' })
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

// POST /api/products
router.post('/', (req, res) => {
  Product.create(req.body)
  .then((dbProductData) => {
    res.status(200).json(dbProductData)
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// PUT /api/products/1 (1 = example id#)
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    //if no product with that id, or no data is changed, error message returned
    if (!dbProductData[0]) {
      res.status(404).json({message: 'Nothing to update'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE /api/products/1 (1 = example id#)
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbProductData => {
    if (!dbProductData) {
      res.status(404).json({message: 'No product found with that ID'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});






module.exports = router;