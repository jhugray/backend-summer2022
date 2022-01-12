const router = require('express').Router();
//import product & category CRUD routes outlined in ./product-routes & ./category-routes
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');

// /categories endpoint uses categoryRoutes
router.use('/categories', categoryRoutes);
// /products endpoint uses productRoutes
router.use('/products', productRoutes);


module.exports = router;