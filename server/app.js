require('dotenv').config(); 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 2000;
const path = require('path');
const mongoose  = require('mongoose');
const mongoURl = process.env.MONGODB_URL;
const cors = require('cors');
const morgan = require('morgan');

const UserRoutes = require('./routes/user');
const OrdersRoutes = require('./routes/order.js');
const ProductsRoutes = require('./routes/product.js');
const CouponsRoutes = require('./routes/coupon.js');
const GoogleRoutes = require('./routes/google.js');
const ProfileRoutes = require('./routes/profile.js');
const checkoutRoutes = require('./routes/checkout.js');
const CategoryRoutes = require('./routes/category.js');

app.use(express.json({ limit: "50mb"}));
app.options('*', cors())
app.use(cors())
app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname + '/public')))
app.use(express.static('client/build'));


mongoose.connect(mongoURl, (error)=>{
    if(error){
        console.error(`There is error, ${error}`);
    }else {
        console.log("Succefully connected to MongoDB Database");
    }
})

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/orders', OrdersRoutes);
app.use('/api/v1/products', ProductsRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/coupons', CouponsRoutes);
app.use('/api/google', GoogleRoutes);
app.use('/api/v1/profile', ProfileRoutes);
app.use('/create-checkout-session', checkoutRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})