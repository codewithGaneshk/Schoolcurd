const Rank = require("../model/rank")

exports.getRank = async (req,res)=>{
    try {
        const data = await Rank.find().populate("school")
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.postRank = async (req,res) => {
    try {
        const data = await Rank.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.putRank = async(req,res)=>{
    try {
        const data = await Rank.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.deleteRank = async(req,res)=>{
    try {
        const data = await Rank.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}