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
    variants:{
        type: Array
    },
    imageurl:{
        type: Array
    },
    itemid:{
        type: Number,
        unique: true
        // Random number
    }
    
}, {
    timestamps: true
})

const Product = mongoose.model('Products', ProductSchema);
module.exports = Product;


// Notes: 

// if variants exist take the price quantity from it
// if it's empty revert -> 1 option product -> take price/quantity from top model
// Or (now best case yet)
// if variants length is =1 that means it has only 1 option, if it's > 1 show the variants options

// * product variations should be as a field in the model: 
// variants [
//      Storage: [
//          title: 256GB
//          price: 1999
//          quantity: 4
//      ]
// ----- OR -----
//     size[
//          title: small
//          price: 10
//          quantity: 2
//     ]
//     color[
//          title: Red
//          price: 12
//          quantity: 3
// ]
// admin ads variants and automaticly loop through it and creates the variations



// * Variations is array to loop through it
// * Variations holds arrays in it - array in array

