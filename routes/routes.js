const Router = require('express');
const router = new Router();
const searchRouter = require('./searchRouter');


router.use('/search', searchRouter);

module.exports = router;