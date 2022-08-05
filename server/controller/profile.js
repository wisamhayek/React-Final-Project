const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const updatePayment = async (req, res) => {

    const ownerid = req.body.ownerid
    const last4 = req.body.last4
    // Encrypt the card details before saving
    const nameOnCard = req.body.name;
    const cardNumber = req.body.cardNumber;
    const expiry = req.body.exp;
    const cvv = req.body.cvv;

    let newPayment ={
        nameOnCard,
        cardNumber,
        expiry,
        cvv,
        last4
    }

    try {
        const updatePayment = await User.updateOne({ _id: ownerid},{ $set: { "profile.paymentMethod" : newPayment } });
        console.log(updatePayment);

        return res.status(200).json({
            message: "Succesfully updated the payment method on file",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the payment method!",
            error
        })
    }
}


const updateShipping = async (req, res) => {
    
    const ownerid = req.body.ownerid
    const name = req.body.name
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const zipcode = req.body.zipcode;
    const province = req.body.province;
    const sameBilling = req.body.checked;

    let newAddress ={
        name,
        address1,
        address2,
        city,
        zipcode,
        province
    }

    try {
        const Shipping = await User.updateOne({ _id: ownerid},{ $set: { "profile.shippingAddress" : newAddress } });

        if(sameBilling === true){
            console.log(sameBilling);
            const Billing = await User.updateOne({ _id: ownerid},{ $set: { "profile.billingAddress" : newAddress } });
            console.log(Billing);
        }
        console.log(Shipping);

        return res.status(200).json({
            message: "Succesfully updated the shipping address",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the shipping address",
            error
        })
    }
}


const deleteShipping = async (req, res) => {
    
    const ownerid = req.body.ownerid

    try {
        const Shipping = await User.updateOne({ _id: ownerid},{ $set: { "profile.shippingAddress" : "" } });
        // const Shipping = await User.updateOne({ _id: ownerid},{ $unset: { "profile.shippingAddress" : "" } });
        console.log(Shipping);

        return res.status(200).json({
            message: "Succesfully deleted the shipping address",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the shipping address",
            error
        })
    }
}


const updateBilling = async (req, res) => {

    const ownerid = req.body.ownerid
    const name = req.body.name
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const zipcode = req.body.zipcode;
    const province = req.body.province;

    let newAddress ={
        name,
        address1,
        address2,
        city,
        zipcode,
        province
    }
    try {
        const Billing = await User.updateOne({ _id: ownerid},{ $set: { "profile.billingAddress" : newAddress } });
        console.log(Billing);

        return res.status(200).json({
            message: "Succesfully updated the billing address",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the billing address",
            error
        })
    }
}


const deleteBilling = async (req, res) => {
    
    const ownerid = req.body.ownerid

    try {
        const Billing = await User.updateOne({ _id: ownerid},{ $set: { "profile.billingAddress" : "" } });
        console.log(Billing);

        return res.status(200).json({
            message: "Succesfully deleted the billing address",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the billing address",
            error
        })
    }
}


const getProfileById = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await User.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched user based on ID",
            data:{
                profile: data.profile,
                orders:data.orders
            }
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


module.exports = {
    updatePayment,
    updateShipping,
    deleteShipping,
    deleteBilling,
    updateBilling,
    getProfileById
}