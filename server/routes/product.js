const express = require('express');
const router = express.Router();
const {getProducts, getProductByID, getProductsByCat, addProduct, deleteProductByID, updateProductByID, getCategories, addCategories} = require('../controller/product');

router.get('/', getProducts);
router.get('/bycat', getProductsByCat);
router.get('/:id', getProductByID);
router.post('/', addProduct)
router.delete('/', deleteProductByID);
router.put('/', updateProductByID);

router.get('/category', getCategories);
router.post('/category', addCategories);

module.exports = router;

// There migh be an error with .get (bycat) and :id