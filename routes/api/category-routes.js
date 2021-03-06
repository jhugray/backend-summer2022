const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET /api/categories
router.get('/', (req, res) => {
  Category.findAll({
    include: [  
      {
        model: Product
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

// GET /api/categories/1 (1 = example id#)
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
    })
  .then(dbCategoryData => {
    //if no category with that id, error not found message 
    if (!dbCategoryData) {
      res.status(404).json({ message:'No category found with that ID' })
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    // internal server error
    res.status(500).json(err)
  });
});

// POST /api/categories
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then((dbCategoryData) => { res.json(dbCategoryData)})
  .catch((err) => {
    console.log(err);
    //internal server error
    res.status(500).json(err);
  });
});

// PUT /api/categories/1 (1 = example id#)
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    // if no category with that id, or data is unchanged, error message
    if (!dbCategoryData[0]) {
      res.status(404).json({message: 'Nothing to update.'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    //internal server error
    res.status(500).json(err);
  });
});

// DELETE /api/categories/1 (1 = example id#)
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData => {
    if (!dbCategoryData) {
      // if no category with that ID, error not found message 
      res.status(404).json({message: 'No category found with that ID'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    //internal server error
    res.status(500).json(err);
  });
});

module.exports = router;