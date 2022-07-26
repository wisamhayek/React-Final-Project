const Product = require('../models/product');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const addProduct = async (req, res) => {

    console.log(req.headers);
    console.log(req.body);
    try {

        const body = req.body;
        const product = new Product(body);
       
        const data = await product.save();

        return res.status(200).json({
            message: "Succesfully added the product",
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

const getProducts = async (req, res) => {
    try {

        // const data = await Product.find().populate({
        //     path: "hotel"
        // }).populate({
        //     path: "ownerid"
        // })

        const data = await Product.find()

        console.log("Total Products: "+data.length);
        return res.status(200).json({
            message: "Succesfully fetched list of products",
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

const getProductByID = async (req, res) => {

    const id = req.params.id;

    try {
        const data = await Product.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched product based on ID",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const getProductsByCat = async (req, res) => {

    const category = req.headers.category;

    try {
        const data = await Product.find({ category: category});

        return res.status(200).json({
            message: "Succesfully fetched products based on category",
            data
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}

const updateProductByID = async (req, res) => {

    const productid = req.body.productid
    const newName = req.body.name;
    const newDesc = req.body.desc;
    const newQuantity = req.body.quantity;
    const newPrice = req.body.price;
    const newCategory = req.body.category; // Array Push to it
    const newImgURL = req.body.imgurl; // Array Push to it
    const newReview = req.body.review; // Array Push to it

    console.log(req.body);

    try {
        const updateProduct = await Product.updateOne({ _id: productid},{ $set: { "name" : newName, "description" : newDesc, "price" : newPrice, "quantity" : newQuantity, "category" : newCategory, "imgURL" : newImgURL,  "reviews" : newReview } });
        console.log(updateProduct);

        return res.status(200).json({
            message: "Succesfully updated this product",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error updating the product!",
            error
        })
    }
}

const deleteProductByID = async (req, res) => {

    const productid = req.headers.productod
    try {
        const data = await Product.deleteOne({ _id: productid});
        console.log(data);

        return res.status(200).json({
            message: "Succesfully deleted this product",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error deleting the product!",
            error
        })
    }
}


module.exports = {
    getProducts,
    getProductByID,
    getProductsByCat,
    addProduct,
    deleteProductByID,
    updateProductByID
}