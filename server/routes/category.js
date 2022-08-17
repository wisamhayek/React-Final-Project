const express = require('express');
const router = express.Router();
const { getCategories, addCategories} = require('../controller/product');

router.get('/', getCategories);
router.post('/', addCategories);

module.exports = router;