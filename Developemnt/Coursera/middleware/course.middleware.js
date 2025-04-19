const { courseModel ,purchaseModel } = require('../db');

const purchaseCorse = async (req,res) => {
    const userId = req.userId;
    const {courseId} = req.body;
    try {
        await purchaseModel.create({
            userId,
            courseId,
        })
        res.status(200).json({
            message : "congratulation now you are enrolled in this course",
        })
    } catch (error) {
        res.status(404).json({
            message : error.message,
        })
    }
}

const allCourse =  async (req,res) => {
    try {
        const allCourse = await courseModel.find({});
        res.json({
            allCourse
        })

    } catch (error) {
        res.status(404).json({
            message : error.message
        })
    }
}

module.exports = {
    purchaseCorse : purchaseCorse,
    allCourse : allCourse
}