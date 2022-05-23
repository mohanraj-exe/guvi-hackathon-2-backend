const express = require("express");
// const mongo = require("./shared");
const dotenv = require("dotenv");
const createOrder_router = require("./router/create_order")

dotenv.config();
const app = express();

app.use(express.json({ extended: false }));

// mongo.connectMongoose().then(() =>{
//     console.log("mongoDb connected")
// })

app.use('/', (req,res,next) =>{
    next();
})

app.use('/rental', createOrder_router)

const port = process.env.PORT || 3000

app.listen(port, () =>
  console.log(`server started on https://localhost:${port}`)
);