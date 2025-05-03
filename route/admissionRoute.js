const {getAdmission,postAdmission,putAdmission,deleteAdmission} = require("../controller/admissionController")
const route = require("express").Router()

route.get("/",getAdmission)
route.post("/",postAdmission)
route.put("/:id",putAdmission)
route.delete("/:id",deleteAdmission)

module.exports = route
