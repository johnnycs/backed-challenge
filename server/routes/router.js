const express = require('express');
const product = require('../controllers/ProductController');
const router = express.Router();
router.get('/', product.list);
module.exports = router;
