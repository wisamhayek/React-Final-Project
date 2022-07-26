const express = require('express');
const router = express.Router();
const {getProducts, getProductByID, getProductsByCat, addProduct, deleteProductByID, updateProductByID} = require('../controller/product');

router.get('/', getProducts);
router.get('/bycat', getProductsByCat);
router.get('/:id', getProductByID);
router.post('/', addProduct)
router.delete('/', deleteProductByID);
router.put('/', updateProductByID);

module.exports = router;

// There migh be an error with .get (bycat) and :id