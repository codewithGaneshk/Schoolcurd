const user = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getuser = async (req, res) => {
    try {
        const data = await user.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })
    }
}
exports.postuser = async (req, res) => {
    try {
        const userExist = await user.findOne({email: req.body.email})
        if (userExist) return res.status(500).json({ errors: true, message: "user already existed" })
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const data = await user.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(500).json({ errors: true, message: error.message })

    }
}

exports.login = async(req,res)=>{
    try {
        const userExist = await user.findOne({email:req.body.email})
        if(!userExist) return res.status(500).json({errors:true,message:"email or password is invalid"})
            veryfyPassword = await bcrypt.compare(req.body.password,userExist.password)
        if(!veryfyPassword) return res.status(500).json({errors:true,message:"email or password is invalid"})
            const token = await jwt.sign({_id:userExist._id},process.env.SEC)
         return res.json({errors:false,data:{token:token,user:{userExist}}})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putuser = async(req,res)=>{
    try {
        const data = await user.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
exports.deleteuser = async(req,res)=>{
    try {
        const data = await user.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


