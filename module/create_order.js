// const create_order_module = require('../model/create_order')
const RazorPay = require("razorpay");

module.exports.createOrder = async(req,res,next) => {
    try{
        const instance = new RazorPay({
            key_id: process.env.RAZORPAY_KEY_ID, 
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })
        const options = {
           amount: req.body.amount,
           currency: "INR"
        }
        const order = await instance.orders.create(options)
        if (!order) return res.status(500).send('Some error occured');
        res.send(order);
    } 
        catch (error) {
        console.log(error)
    
}}