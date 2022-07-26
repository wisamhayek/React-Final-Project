const mongoose = require('mongoose');

const OrdersSchema = mongoose.Schema({
    //From - To - Time - message content
    ownerid: {
        //This user ID - ID is from monogdb users scheme
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    invoice: {
        type: Object,
        required: true
    },
    orderStatus:{
        // type: Object
        type: String,
        default: "Processing"
        // Completed / Shipped / Canceled / Processing
    }
},{
    timestamps: true
})

const Order = mongoose.model("Orders", OrdersSchema);
module.exports = Order;


// invoice {
//     shippingAddress{
//         fullName
//         businessName
//         street1
//         street2
//         city
//         zipcode
//         state
//         country
//     },
//     billingAddress{
//         fullName
//         businessName
//         street1
//         street2
//         city
//         zipcode
//         state
//         country
//     },
//     paymentMethod{
//         cardType
//         cardNumber
//         expiry
//         csv
//     }
// }

// When order placed the Status will be Processing
// Admin Will change the Status from his dahsboard