const express = require('express');
const router = express.Router();
const {  updateBilling, updateShipping,deleteShipping, updatePayment,deletePayment,getProfileById, deleteBilling } = require('../controller/profile');

router.post('/shipping', updateShipping);
router.delete('/shipping', deleteShipping);
router.post('/billing', updateBilling);
router.delete('/billing', deleteBilling);
router.post('/payment', updatePayment);
router.delete('/payment', deletePayment);
router.get('/:id', getProfileById);

module.exports = router;