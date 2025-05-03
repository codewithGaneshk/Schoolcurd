const {getuser,postuser,putuser,deleteuser,login} = require("../controller/userController")
const route = require("express").Router()

route.get("/",getuser)
route.post("/",postuser)
route.post("/login",login)
route.put("/:id",putuser)
route.delete("/:id",deleteuser)

module.exports = route

