const user = require("../models/user");

const registerUser = async (req, res) =>{
    const {userName, userEmail, userPasoword} = req.body

    // check user exists
    const existingUser = await user.findOne({userEmail})
    if(existingUser){
        return res.json ({error: "User already exists"})
    }

    // HashPassword for Security
    const hashPassword = await bcrypt.has(userPasoword, 10)

    // create new user 
    const newUser = new user({
        userName, userEmail, userPasoword: hashPassword
    })

    try {
        await newUser.save()
        res.status(201).json({massage: "User Registered Succesfully"})
    } catch (error) {
        res.json({error: "server error"})
    }

}