const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: "false"
    },
    profile:{
        billingAddress: {
            type: Object
        },
        shippingAddress: {
            type: Object
        },
        paymentMethod:{
            type: Object
        }
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema);
module.exports = User;