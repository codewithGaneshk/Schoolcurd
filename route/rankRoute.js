const {getRank,postRank,putRank,deleteRank} = require("../controller/RankController")
const route = require("express").Router()

route.get("/",getRank)
route.post("/",postRank)
route.put("/:id",putRank)
route.delete("/:id",deleteRank)

module.exports = route