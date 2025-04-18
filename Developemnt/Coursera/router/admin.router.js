const {Router} = require('express');
const adminModel = require('../db');

const adminRouter = Router();

adminRouter.post("/sgnup",(req,res) => {
    res.json({
        message : "admin sign up endpiont",
    })
})

adminRouter.post("/signin",(req,res) => {
    res.json({
        message : "admin signin endpoint",
    })
})

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