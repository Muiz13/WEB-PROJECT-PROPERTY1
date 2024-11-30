
const { getAllSupplies,getSupply,createSupply,updateSupply, deleteSupply} = require("../Controller/supplyController");
const authenticate =require('../Middlewares/authenticate')

const supplyRouter = require("express").Router();
const upload=require("../Middlewares/upload")


supplyRouter.get("/" , getAllSupplies)
supplyRouter.get("/:id" , getSupply)

supplyRouter.post("/",authenticate,upload , createSupply)

supplyRouter.delete("/:id",authenticate,deleteSupply)
supplyRouter.patch("/:id",authenticate,upload,updateSupply)


module.exports = supplyRouter;



