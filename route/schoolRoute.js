const {getSchool,postSchool,putSchool,deleteSchool} = require("../controller/schoolController")
const auth = require("../middlewair/auth")
const route = require("express").Router()

route.get("/",getSchool)
route.post('/',postSchool)
route.put("/:id",auth,putSchool)
route.delete("/:id",auth,deleteSchool)

module.exports = route