const express = require("express");
const router = express.Router();
const create_order_module = require('../module/create_order')

router.post('/createOrder',create_order_module.createOrder)

module.exports = router;