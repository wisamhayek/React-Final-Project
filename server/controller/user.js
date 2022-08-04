const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const createUser = async (req, res) => {
    try {
        // Take the password from the request and encrypt it -> save it to the database.
        const encryptedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: encryptedPassword
        })

        const data = await user.save();

        const token = jwt.sign({
            email: req.body.email
        }, process.env.SECRETKEY);

        return res.status(200).json({
            message: "Succesfully created a user",
            user: {
                name: data.name,
                email: data.email,
                id: data._id,
                isAdmin: data.isAdmin,
                orders: data.orders,
                profile: data.profile
            },
            token
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}



const loginUser = async (req, res) => {
    try {

        const user = req.body;
        let findUser = await User.findOne({ email: user.email});
    
        if (findUser) {
            const matchPassword = await bcrypt.compare(user.password, findUser.password);
    
            if (matchPassword) {
                const token = jwt.sign({
                    email: user.email
                }, process.env.SECRETKEY);
               
                return res.status(200).json({
                    message: "Succesfully logged in",
                    user: {
                        name: findUser.name,
                        email: findUser.email,
                        id: findUser._id,
                        isAdmin: findUser.isAdmin,
                        orders: findUser.orders,
                        profile: findUser.profile
                    },
                    token
                })
    
            } else {
                return res.status(401).json({
                    message: "User Unauthorized!",
                })
            }
    
        } else {
            return res.status(404).json({
                message: "User not found!",
                // error
            })
        }

    } catch (error) {
        return res.status(404).json({
            message: "There was an error here!",
            error
        })
    }
}


const getUserById = async (req, res) => {

    const id = req.params.id;
    console.log(req.params);
    console.log(id);

    try {
        const data = await User.findOne({ _id: id});

        return res.status(200).json({
            message: "Succesfully fetched user based on ID",
            data:{
                id: data._id,
                name:data.name,
                email: data.email,
                isAdmin: data.isAdmin,
                orders: data.orders,
                profile: data.profile
            }
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


// Not working, fix it
const getUsers = async (req, res) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        
        if(token){

            const decodedObject = jwt.decode(token, { complete : true });
            const userEmail = decodedObject?.payload?.email;

            const findUser = await User.findOne({ email: userEmail});

            if(findUser){
                const data = await User.find();

                return res.status(200).json({
                    message: "Succesfully fetched list of User",
                    data:{
                        id: data._id,
                        name:data.name,
                        email: data.email,
                        isAdmin: data.isAdmin,
                        orders: data.orders,
                        profile: data.profile
                    }
            })
            }else {
                return res.status(404).json({
                    message: "This user doesn't exist",
                })
            }

        }else {
            return res.status(401).json({
                message: "Not Authorized",
            })
        }

    } catch(error) {
        return res.status(500).json({
            message: "There was an error!",
            error
        })
    }
}


module.exports = {
    createUser,
    loginUser,
    getUserById,
    getUsers
}



// --------->> Didn't use it for this project. might need it in the future <<---------




// --------->> Didn't use it for this project. might need it in the future <<---------



const addContact = async (req, res) => {

    const userid = req.body.userid;
    const newcontact = req.body.newcontact;

    console.log(req.body);

    try {
        const addContact = await User.updateOne({ _id: userid},{ $addToSet: { "contacts" : newcontact } });
        console.log(addContact);

        return res.status(200).json({
            message: "Succesfully added this contact",
        })
    } catch(error) {
        return res.status(500).json({
            message: "There was an error adding the contact! - user doesn't exist",
            error
        })
    }
}