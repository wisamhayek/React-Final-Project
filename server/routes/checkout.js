const express = require('express');
const router = express.Router();
const {  payStripe } = require('../controller/checkout.js');

router.post('/', payStripe);

module.exports = router;