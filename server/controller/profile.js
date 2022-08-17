const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const updatePayment = async (req, res) => {

    const ownerid = req.body.ownerid
    const last4 = String(req.body.cardNumber).slice(-4);
    const nameOnCard = req.body.name;
    // Encrypt the card details before saving
    const encryptedCardNumber = await bcrypt.hash(req.body.cardNumber, 10);
    const encryptedExpiry = await bcrypt.hash(req.body.expiry, 10);
    const encryptedCvc = await bcrypt.hash(req.body.cvc, 10);
    
    let newPayment ={
        nameOnCard,
        encryptedCardNumber,
        encryptedExpiry,
        encryptedCvc,
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

const deletePayment = async (req, res) => {
    
    const ownerid = req.body.ownerid

    try {
        const Payment = await User.updateOne({ _id: ownerid},{ $set: { "profile.paymentMethod" : "" } });
        console.log(Payment);

        return res.status(200).json({
            message: "Succesfully deleted the payment method",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the payment method",
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
    console.log(id);

    try {
        const data = await User.findOne({ _id: id}).populate({
            path: 'profile',
            populate: {path: 'cart.itemid'}});

        return res.status(200).json({
            message: "Succesfully fetched user based on ID",
            data:{
                profile: data.profile,
                orders:data.orders,
                cart:data.cart
            }
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


// add item to cart
const addToCart = async (req, res) => {

    const ownerid = req.body.ownerid
    const itemid = req.body.itemid
    const quantity = req.body.quantity;
    const variant = req.body.variant;
    
    let cartItems ={
        itemid,
        quantity,
        variant
    }

    try {
        const Cart = await User.updateOne(
            { _id: ownerid },
            { $push: { "profile.cart": cartItems } }
         )
        console.log(Cart);

        return res.status(200).json({
            message: "Succesfully added the item to cart",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error adding to cart",
            error
        })
    }
}


// Update item quanity in cart
const updateCart = async (req, res) => {

    const ownerid = req.body.ownerid
    const itemid = req.body.itemid
    const quantity = req.body.quantity;
    
    console.log(ownerid);
    console.log(itemid);
    console.log(quantity);
    try {
        const Cart = await User.updateOne({
            $and: [
                {_id : ownerid},
                {'profile.cart.itemid': itemid }
                // {'profile.cart.itemid': ObjectId(itemid) }
            ]},
            { "$set": { "profile.cart.$.quantity": quantity } },
            {strict:false}
         )
        console.log(Cart);

        return res.status(200).json({
            message: "Succesfully updated cart",
            Cart
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the cart",
            error
        })
    }

}

// Delete item from cart
const deleteCart = async (req, res) => {

    const ownerid = req.headers.ownerid
    const itemid = req.headers.itemid

    try {
        const Cart = await User.updateOne(
            { _id : ownerid },
            {$pull : {"profile.cart" : {"itemid": itemid}}}
          )
        console.log(Cart);

        return res.status(200).json({
            message: "Succesfully deleted the item from cart",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting item from cart",
            error
        })
    }
}


module.exports = {
    updatePayment,
    deletePayment,
    updateShipping,
    deleteShipping,
    deleteBilling,
    updateBilling,
    getProfileById,
    addToCart,
    deleteCart,
    updateCart
}