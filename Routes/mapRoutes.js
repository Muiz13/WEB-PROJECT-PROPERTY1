const authenticate =require('../Middlewares/authenticate')
const { getAllMaps,getMap,createMap,updateMap, deleteMap} = require("../Controller/mapController");

const mapRouter = require("express").Router();
const upload=require("../Middlewares/upload")


mapRouter.get("/" , getAllMaps)
mapRouter.get("/:id" , getMap)

mapRouter.post("/",authenticate,upload , createMap)

mapRouter.delete("/:id",authenticate,deleteMap)
mapRouter.patch("/:id",authenticate,upload,updateMap)


module.exports = mapRouter;



