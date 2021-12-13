const Router = require('express');
const router = new Router();
const searchController = require("../controllers/searchController");

router.get('/partners', searchController.getPartner);
router.get('/', searchController.getType);

module.exports = router;