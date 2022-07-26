const Order = require('../models/order.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const addOrder = async (req, res) => {
    try {

        const body = req.body;
        const order = new Order(body);
       
        const data = await order.save();

        return res.status(200).json({
            message: "Succesfully added the order",
            data
        })
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getOrders = async (req, res) => {
    try {
        // const data = await Order.find().populate({
        //     path: "user"
        // });

        const data = await Order.find()

        return res.status(200).json({
            message: "Succesfully fetched list of orders",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getOrderById = async (req, res) => {

    const name = req.params.id;
    // const name = req.params.id;
    console.log(req.params);
    console.log(name);

    try {
        const data = await Order.findOne({ name: name});

        return res.status(200).json({
            message: "Succesfully fetched the order based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateOrderByID = async (req, res) => {

    const ownerid = req.body.ownerid
    const newProduct = req.body.product;
    const newQuantity = req.body.quantity;
    const newPrice = req.body.price;
    const newInvoice = req.body.invoice;
    const newOrderStatus = req.body.orderStatus;

    console.log(req.headers);

    try {
        const updateOrder = await Order.updateOne({ _id: ownerid},{ $set: { "product" : newProduct, "quantity" : newQuantity, "price" : newPrice,  "invoice" : newInvoice, "orderStatus" : newOrderStatus } });
        console.log(updateOrder);

        return res.status(200).json({
            message: "Succesfully updated this order",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the order!",
            error
        })
    }
}

const deleteOrderByID = async (req, res) => {

    const orderid = req.headers.orderid
    try {
        const data = await Order.deleteOne({ _id: orderid});
        console.log(data);

        return res.status(200).json({
            message: "Succesfully deleted this order",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the order!",
            error
        })
    }
}


module.exports = {
    getOrders,
    addOrder,
    updateOrderByID,
    getOrderById,
    deleteOrderByID
}