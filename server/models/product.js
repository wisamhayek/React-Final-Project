const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number
    },
    category:{
        type: String
    },
    isVariant: {
        type: Boolean
    },
    variantName: {
        type: String,
    },
    variants:{
        type: Object
    },
    imageurl:{
        type: Object
    },
    itemid:{
        type: Number,
        // unique: true
        // Random number
    }
    
}, {
    timestamps: true
})

const Product = mongoose.model('Products', ProductSchema);
module.exports = Product;