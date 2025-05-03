 const mongoose = require("mongoose")

 const rankSchema = new mongoose.Schema({
    Top:{
        type:String,
        required:true
    },
    Scholar:{
        type:String,
        required:true
    },
    school:{
        type:mongoose.Schema.ObjectId,
        ref:"school"
    }
 },{timestamps:true})
 module.exports = mongoose.model("rankerss",rankSchema)