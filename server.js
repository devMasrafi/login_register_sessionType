const express = require("express")
const mongoose = require("mongoose")


const app = express()

const port = process.env.PORT || 8000

// middleware
app.use(express.json())
// routes
app.use("/api/users", (req, res)=>{
    res.send("")
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
    
})