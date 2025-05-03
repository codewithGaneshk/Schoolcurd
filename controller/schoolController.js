const School = require("../model/school")

exports.getSchool = async (req,res)=> {
    try {
        const data = await School.find().populate("admission")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postSchool = async (req,res)=>{
    try {
        const data = await School.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.putSchool = async (req,res)=>{
    try {
        const data = await School.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.deleteSchool = async(req,res)=>{
    try {
        const data = await School.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}