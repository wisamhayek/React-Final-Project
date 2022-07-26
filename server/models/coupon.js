const mongoose = require('mongoose');

const CouponsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    used: {
        type: Number
    },
    percent: {
        type: Number
    },
    status:{
        // type: Object
        type: String,
        default: "Active"
        // Active / inActive / Canceled / Expired
    }
},{
    timestamps: true
})

const Coupon = mongoose.model("Coupons", CouponsSchema);
module.exports = Coupon;


// couponsCode [
//     name: "new users first order",
//     code: "WELCOME10",
//     quantity: 10,
//     percent: 10, // Give discount as a percent
//     credit: 20  // Or give discount as dollar credit
// ]