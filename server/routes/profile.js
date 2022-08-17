const express = require('express');
const router = express.Router();
const {  updateBilling, updateShipping,deleteShipping, updatePayment,deletePayment,getProfileById, deleteBilling,addToCart, deleteCart,updateCart } = require('../controller/profile');

router.post('/shipping', updateShipping);
router.delete('/shipping', deleteShipping);
router.post('/billing', updateBilling);
router.delete('/billing', deleteBilling);
router.post('/payment', updatePayment);
router.delete('/payment', deletePayment);
router.get('/:id', getProfileById);

router.post('/cart', addToCart);
router.put('/cart', updateCart);
router.delete('/cart', deleteCart);

module.exports = router;