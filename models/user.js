const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    userEmail:{
        type: String,
        unique: true,
        required: true,
    },
    userPasoword:{
        type: String,
        required: true,
    },
    useProfileImg:{
        type: String,
    }
})

module.exports = mongoose.model("User", userSchema)