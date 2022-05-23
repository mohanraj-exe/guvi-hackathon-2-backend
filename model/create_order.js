const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const create_order_Schema = new Schema({
    product_id:{
        type: Number,
        required: true
    },
    productTitle:{
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    productCategory:{
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    rentalDays:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    price:{
        type: Number
    }
})

const productOrder = mongoose.model('createOrder', create_order_Schema)
module.exports = productOrder