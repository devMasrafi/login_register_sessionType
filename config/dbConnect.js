const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = async ()=>{
    // console.log(process.env);
    
    try {
        await mongoose.connect(
            process.env.MONGO_URL
        )
        console.log("Database connected");

    } catch (error) {
        console.log("Database connection Error");
        
    }
}

module.exports = dbConnect