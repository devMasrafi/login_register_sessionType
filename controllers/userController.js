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
    const hashPassword = await bcrypt.hash(userPasoword, 10)

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

const loginUser = async (req, res, next) =>{
    const {userEmail, password} = req.body

    try {
        // // find email of user
        // const userFound = await User.findOne({userEmail})
        // if(!userFound){
        //     return res.json({error: "User not found"})
        // }
        // // check password of user
        // const isPassowrdMatch = await bcrypt.compare(password, users.password)
        // if (!isPassowrdMatch) {
        //     return res.json({error: "Invalid Password"})
        // }
        // res.json({massage: "login successfull", token})
        
        // check if the email exist
        const userFound = await User.findOne({email})
        if(!userFound){
            // throw an error
            return next('invalid login credentials')

        }

        // password verify
        const isPasswordValid = await bcypt.compare(password, userFound.password)

        if (!isPasswordValid) {
            // throw an error
            return next('invalid login credentials')
        }

    } catch (error) {
        res.json(error)
    }

}

module.exports = { registerUser, loginUser}