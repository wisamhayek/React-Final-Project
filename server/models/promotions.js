const mongoose = require('mongoose');

const PromotionsSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    bg: {
        type: String,
        required: true,
    },
    linkto: {
        type: String,
    }
}, {
    timestamps: true
})

const Promotions = mongoose.model('Promotions', PromotionsSchema);
module.exports = Promotions;