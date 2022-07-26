const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Combine the 2 functions in 1
// Get the token -> decrypt:
// if user doesn't exist -> Create one
// if user exist -> Login


const withGoogle = async (req, res) => {

    // Check AUD if the same as my client id
    // SUB is unique google user id -> maybe make it the password / use the bcrypt.hash

    let userToken = req.body.userToken;
    userDetails = jwt.decode(userToken);
    
    try {

        // const user = req.body;
        let findUser = await User.findOne({ email: userDetails.email});
    
        if (findUser) {
            const matchPassword = await bcrypt.compare(userDetails.sub, findUser.password);
    
            if (matchPassword) {
                const token = jwt.sign({
                    email: userDetails.email
                }, process.env.SECRETKEY);
               
                return res.status(200).json({
                    message: "Succesfully logged in",
                    user: {
                        name: findUser.name,
                        email: findUser.email,
                        id: findUser._id,
                        // isAdmin: findUser.isAdmin,
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
            const encryptedPassword = await bcrypt.hash(userDetails.sub, 10);

            const user = new User({
                name: userDetails.name,
                email: userDetails.email,
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
                    // isAdmin: data.isAdmin,
                    orders: data.orders,
                    profile: data.profile
                },
                token
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: "There was an error here!",
            error
        })
    }
}


module.exports = {
    withGoogle
}