
const { login,updateUser } = require("../Controller/userController");
const authenticate =require('../Middlewares/authenticate')

const userRouter = require("express").Router();
const upload=require("../Middlewares/upload")


//userRoter.post("/signup" , signup)
userRouter.post('/login' , login)
userRouter.patch('/update' ,authenticate,upload, updateUser)

//userRoter.get('/' , getAllUsers)



module.exports = userRouter;



