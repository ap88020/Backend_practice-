const {Router} = require('express');
const {signUp,signIn} = require('../middleware/admin.middleware');

const adminRouter = Router();

adminRouter.post("/signup",  signUp);

adminRouter.post("/signin", signIn);

adminRouter.post("/course", (req,res) => {
    res.json({
        message : "admin create course",
    })
})

adminRouter.put("/course", (req,res) => {
    res.json({
        message : "admin updated course",
    })
})

adminRouter.get("/course/bulk", (req,res) => {
    res.json({
        message : "admin course in bulk"
    })
})

module.exports = {
    adminRouter : adminRouter,
}