const Promotions = require('../models/promotions');
require('dotenv').config();


const addPromotion = async (req, res) => {

    console.log(req.body);

    const id = req.body.id;
    const img = req.body.img;
    const title = req.body.title;
    const desc = req.body.desc;
    const bg = req.body.bg;
    const linkto = req.body.linkto;
    
    let newPromotion = {
        id: id,
        img: img,
        title: title,
        desc: desc,
        bg: bg,
        linkto: linkto
    }

    try {

        const product = new Promotions(newPromotion);
       
        const data = await product.save();

        return res.status(200).json({
            message: "Succesfully added the promotion",
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

const getPromotions = async (req, res) => {
    // const category = req.headers.category;

    try {
        const data = await Promotions.find();

        return res.status(200).json({
            message: "Succesfully fetched list of promotions",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const deletePromotionByID = async (req, res) => {

    const promotionid = req.headers.promotionid

    try {
        const data = await Promotions.deleteOne({ _id: promotionid});
        // console.log(data);

        return res.status(200).json({
            message: "Succesfully deleted this promotion",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the promotion!",
            error
        })
    }
}

const updatePromotionByID = async (req, res) => {

    const promoid = req.body.promoid
    const title = req.body.promotion.title;
    const desc = req.body.promotion.desc;
    const img = req.body.promotion.img;
    const bg = req.body.promotion.bg;
    const linkto = req.body.promotion.linkto;
    const id = req.body.promotion.id

    try {
        const updateProduct = await Promotions.updateOne({ _id: promoid},{ $set: { "title" : title, "desc" : desc, "img" : img, "bg" : bg, "linkto" : linkto, "id" : id } });
        console.log(updateProduct);

        return res.status(200).json({
            message: "Succesfully updated this promotion",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the promotion!",
            error
        })
    }
}

module.exports = {
    addPromotion,
    getPromotions,
    deletePromotionByID,
    updatePromotionByID
}