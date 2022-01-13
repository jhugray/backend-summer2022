const router = require('express').Router();
//imports API routes
const apiRoutes = require('./api');

// /api endpoint uses apiRoutes (./api)
router.use('/api', apiRoutes);

// 404 error if server cannot return page
router.use((req, res) => {
  res.status(404).send('<h1>Oh no! 404 Error!</h1>');
});

module.exports = router;