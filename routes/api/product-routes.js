const router = require('express').Router();
const { Product, Category } = require('../../models');

// GET /api/products endpoint
router.get('/', (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
  .then(dbProductData => res.json(dbProductData))
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
    include: [  
      {
        model: Category,
        attributes: ['category_name']
      }
    ]
  })
  .then(dbProductData => {
    //if no product with that id, error not found message
    if (!dbProductData) {
      res.status(404).json({ message:'No product found with that ID' })
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    // internal server error
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
    // bad request response 
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
    //if no product with that id, or no data is changed, error message 
    if (!dbProductData[0]) {
      res.status(404).json({message: 'Nothing to update'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    //internal server error
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
      // if no product with that ID, error not found message 
      res.status(404).json({message: 'No product found with that ID'});
      return;
    }
    res.json(dbProductData);
  })
  .catch(err => {
    console.log(err);
    //internal server error
    res.status(500).json(err);
  });
});

module.exports = router;