const mongoose = require("mongoose")

const admissionSchema = new mongoose.Schema({
    AdmissionDate:{
        type:Date,
        required:true
    },
    lastDate:{
        type:String,        
    }
},{timestamps:true})
module.exports=mongoose.model("admission",admissionSchema)