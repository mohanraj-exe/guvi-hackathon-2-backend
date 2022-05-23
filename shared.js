const mongoose = require("mongoose");

module.exports = {
    async connectMongoose(){
        try{
            await mongoose.connect(process.env.MONGOOSE_URI)
        }
        catch(err){
            console.log(err)
        }
    }
}