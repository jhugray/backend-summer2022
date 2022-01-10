const router = require('express').Router();
const { Product } = require('../../models');

// GET /api/products
router.get('/', (req, res) => {
  //runs the findAll method on the Product model
  Product.findAll()
  //returns data in JSON format
  .then(dbProductData => res.json(dbProductData))
  //error handling
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

// GET /api/products/1 (1 = example id#)
router.get('/:id', (req, res) => {});

// POST /api/products
router.post('/', (req, res) => {});

// PUT /api/products/1 (1 = example id#)
router.put('/:id', (req, res) => {});

// DELETE /api/products/1 (1 = example id#)
router.delete('/:id', (req, res) => {});

module.exports = router;