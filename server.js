const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/userRoutes")
const dbConnect = require("./config/dbConnect")


const app = express()

const port = process.env.PORT || 8000

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routes
app.use("/api/v1", userRouter)


// mongodbConnection
dbConnect()

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})