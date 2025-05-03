const mongoose = require("mongoose")

const schoolSchema = new mongoose.Schema({
    SchoolName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    admission:{
        type:mongoose.Schema.ObjectId,
        ref:"admission"
    },

    
},{timestamps:true})

module.exports = mongoose.model("school",schoolSchema)