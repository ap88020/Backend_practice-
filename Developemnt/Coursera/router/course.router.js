const {Router} = require('express');
const courseRouter = Router();

courseRouter.post("/purchases", (req,res) => {
    res.json({
        message : "course purchases",
    })
})

courseRouter.get("/preview", (req,res) => {
    res.json({
        message : "courses",
    })
})

module.exports = {
    courseRouter : courseRouter,
}