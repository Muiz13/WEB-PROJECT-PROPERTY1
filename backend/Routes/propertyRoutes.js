
const { getAllProperties,getProperty,createProperty,updateProperty, deleteProperty} = require("../Controller/propertyController");
const authenticate =require('../Middlewares/authenticate')

const propertyRouter = require("express").Router();
const upload=require("../Middlewares/upload")


propertyRouter.get("/" , getAllProperties)
propertyRouter.get("/:id" , getProperty)

propertyRouter.post("/",authenticate,upload , createProperty)

propertyRouter.delete("/:id",authenticate,deleteProperty)
propertyRouter.patch("/:id",authenticate,upload,updateProperty)


module.exports = propertyRouter;



