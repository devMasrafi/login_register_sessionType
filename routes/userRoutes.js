const express = require("express")
const userController = require("../controllers/userController.js")


const router = express.Router()

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
// router.get("/profile", userController.getUserProfile)


// router.put("/profle", userController.updateUserProfile)
// router.post("/forgot-passord", userController.forgotPassword)
// router.put("/reset-password", userController.resetPassword)

module.exports = router