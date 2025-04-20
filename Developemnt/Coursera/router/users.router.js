const {Router} = require('express');
const {userModel} = require('../db');
const userRouter = Router();
const { signUp,signIn , purchases} = require('../middleware/user.middleware');
const { userAuth }= require('../auth/user.auth');

userRouter.post("/signup", signUp);

userRouter.post("/signin", signIn);

userRouter.get("/purchases",userAuth,purchases)

module.exports = {
    userRouter : userRouter
}