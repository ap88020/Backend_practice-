const {Router} = require('express');
const {signUp,signIn , createCourse,updateCourse,courseBulk} = require('../middleware/admin.middleware');
const { adminAuth } = require('../auth/admin.auth');
const { adminModel } = require('../db');

const adminRouter = Router();

adminRouter.post("/signup",  signUp);

adminRouter.post("/signin", signIn);

adminRouter.post("/course", adminAuth, createCourse);

adminRouter.put("/course",adminAuth,updateCourse);

adminRouter.get("/course/bulk",adminAuth,courseBulk);

module.exports = {
    adminRouter : adminRouter,
}