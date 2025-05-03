const Admission = require("../model/admission")

exports.getAdmission=async(req,res)=>{
    try {
        const data = await Admission.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postAdmission = async (req,res)=>{
    try {
        const data = await Admission.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.putAdmission = async (req,res)=>{
    try {
        const data = await Admission.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.deleteAdmission = async (req,res)=>{
    try {
        const data = await Admission.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}