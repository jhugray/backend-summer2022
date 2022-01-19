const router = require('express').Router();
const apiRoutes = require('./api');
const exportRoutes = require('./export-routes');


router.use('/api', apiRoutes);
router.use('/export', exportRoutes);


// 404 error if server cannot return page
router.use((req, res) => {
  res.status(404).send('<h1>Oh no! 404 Error!</h1>');
});

module.exports = router;