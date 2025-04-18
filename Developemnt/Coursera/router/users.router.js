const {Router} = require('express');
const {userModel} = require('../db');
const userRouter = Router();
const { signUp,signIn } = require('../middleware/user.middleware');

userRouter.post("/signup", signUp);

userRouter.post("/signin", signIn);

userRouter.get("/purchases", (req,res) => {
    res.json({
        message : " course puchases endpoint",
    })
})

module.exports = {
    userRouter : userRouter
}