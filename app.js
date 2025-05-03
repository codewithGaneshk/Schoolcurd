const mongoose = require("mongoose")
const express = require("express")
require("dotenv/config")
const userRoute = require("./route/userRoute")
const schoolRoute = require("./route/schoolRoute")
const admissionRoute = require("./route/admissionRoute")
const rankController = require("./route/rankRoute")

const app = express()
app.get("/",(req,res)=>{
    res.send("Welcome to School")
})
app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/school",schoolRoute)
app.use("/api/admission",admissionRoute)
app.use("/api/rank",rankController)
app.listen(process.env.PORT)

async function db() {
    try {
        const data = await mongoose.connect(process.env.DB)
        console.log(data.default.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
db()