const express = require('express');
const router = express.Router();
const {getCoupons, getCouponById, addCoupon, updateCouponByID, deleteCouponByID} = require('../controller/coupon.js');

router.get('/', getCoupons);
router.get('/:id', getCouponById);
router.post('/', addCoupon);
router.put('/', updateCouponByID);
router.delete('/', deleteCouponByID);

module.exports = router;