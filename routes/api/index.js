const router = require('express').Router();
//import product CRUD routes outlined in ./product-routes
const productRoutes = require('./product-routes');

// /products endpoint uses productRoutes
router.use('/products', productRoutes);


module.exports = router;