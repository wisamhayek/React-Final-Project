const express = require('express');
const router = express.Router();
const {getOrders, getOrderById, addOrder, updateOrderByID, deleteOrderByID} = require('../controller/order.js');

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', addOrder);
router.put('/', updateOrderByID);
router.delete('/', deleteOrderByID);

module.exports = router;