const router = require('express').Router();
//imports API routes
const apiRoutes = require('./api');

// /api endpoint uses apiRoutes (./api)
router.use('/api', apiRoutes);


module.exports = router;