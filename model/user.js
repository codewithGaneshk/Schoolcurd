const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        dafault:"user"
    }
}, {timestamps:true})

module.exports = mongoose.model("schooluser",userSchema)