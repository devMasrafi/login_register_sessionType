const user = require("../models/user");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

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

const loginUser = async (req, res) =>{
    const {userEmail, password} = req.body

    // find email of user
    const user = await User.findOne({userEmail})
    if(!user){
        return res.json({error: "User not found"})
    }
    // check password of user
    const isPassowrdMatch = await bcrypt.compare(password, user.password)
    if (!isPassowrdMatch) {
        return res.json({error: "Invalid Password"})
    }

    const token = jwt.sign({userId: user._id}, "user_secret_key", { expiresIn: '1h'} )

    res.json({massage: "login successfull", token})

}

module.exports = { registerUser}