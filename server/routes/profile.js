const express = require('express');
const router = express.Router();
const {  updateBilling, updateShipping, updatePayment,getProfileById } = require('../controller/profile');

router.post('/shipping', updateShipping);
router.post('/billing', updateBilling);
router.post('/payment', updatePayment);
router.get('/:id', getProfileById);

module.exports = router;