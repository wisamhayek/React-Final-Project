const Coupon = require('../models/coupon.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const addCoupon = async (req, res) => {
    try {

        const body = req.body;
        const coupon = new Coupon(body);
       
        const data = await coupon.save();

        return res.status(200).json({
            message: "Succesfully added the coupon",
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

const getCoupons = async (req, res) => {
    try {
        // const data = await Coupon.find().populate({
        //     path: "user"
        // });

        const data = await Coupon.find()

        return res.status(200).json({
            message: "Succesfully fetched list of coupons",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getCouponById = async (req, res) => {

    const name = req.params.id;
    // const name = req.params.id;
    console.log(req.params);
    console.log(name);

    try {
        const data = await Coupon.findOne({ name: name});

        return res.status(200).json({
            message: "Succesfully fetched the coupon based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateCouponByID = async (req, res) => {

    const ownerid = req.body.ownerid
    const newProduct = req.body.product;
    const newQuantity = req.body.quantity;
    const newPrice = req.body.price;
    const newInvoice = req.body.invoice;
    const newCouponStatus = req.body.couponStatus;

    console.log(req.headers);

    try {
        const updateCoupon = await Coupon.updateOne({ _id: ownerid},{ $set: { "product" : newProduct, "quantity" : newQuantity, "price" : newPrice,  "invoice" : newInvoice, "couponStatus" : newCouponStatus } });
        console.log(updateCoupon);

        return res.status(200).json({
            message: "Succesfully updated this coupon",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the coupon!",
            error
        })
    }
}

const deleteCouponByID = async (req, res) => {

    const couponid = req.headers.couponid
    try {
        const data = await Coupon.deleteOne({ _id: couponid});
        console.log(data);

        return res.status(200).json({
            message: "Succesfully deleted this coupon",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the coupon!",
            error
        })
    }
}


module.exports = {
    getCoupons,
    addCoupon,
    updateCouponByID,
    getCouponById,
    deleteCouponByID
}