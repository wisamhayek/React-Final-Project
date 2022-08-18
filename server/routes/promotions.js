const express = require('express');
const router = express.Router();
const { getPromotions, addPromotion, deletePromotionByID, updatePromotionByID } = require('../controller/promotions');

router.get('/', getPromotions);
router.post('/', addPromotion);
router.put('/', updatePromotionByID);
router.delete('/', deletePromotionByID);

module.exports = router;