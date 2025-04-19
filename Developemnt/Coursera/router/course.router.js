const {Router} = require('express');
const courseRouter = Router();
const {userAuth} = require('../auth/user.auth');
const { courseModel , purchaseModel } = require('../db');
const { purchaseCorse , allCourse } = require('../middleware/course.middleware');

courseRouter.post("/purchases", userAuth, purchaseCorse);

courseRouter.get("/preview", allCourse);

module.exports = {
    courseRouter : courseRouter,
}