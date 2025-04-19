const {adminModel, courseModel} = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwt_secret_admin } = require('../config');

const signUp = async (req,res) => {
    try {
        const {email,password,firstName,lastName} = req.body;
        const hashPassword = await bcrypt.hash(password,10);
        await adminModel.create({
            email,
            password : hashPassword,
            firstName,
            lastName,
        })
        res.status(200).json({
            message:"you signup successfully",
        })
    } catch (error) {
        res.status(403).json({
            message : error.message,
        })
    }

};
const signIn = async (req,res) => {
    const {email,password} = req.body;
    try {

        const admin =  await adminModel.findOne({email : email});
        if(!admin){
            res.status(403).json({
                message : "admin is not valid",
            })
        }else{
            const matchPass = await bcrypt.compare(password,admin.password);
            if(matchPass){
                const token = jwt.sign({id : admin._id},jwt_secret_admin);
                res.status(200).json({
                    admin : admin.firstName,
                    token  : token,
                })
            }else{
                res.status(400).json({
                    message : "incorrect password"
                })
            }
        }
    } catch (error) {
        res.status(403).json({
            message : error.message
        })
    }
}

const createCourse =  async (req,res) => {
    try {
        const adminId = req.adminId;
        const {title , description , price , imageUrl} = req.body;
        
        const course = await courseModel.create({
            title,
            description,
            price,
            imageUrl,
            creatorId : adminId
        })
        res.json({
            message : "you created course successfully",
            course  : course
        })
    } catch (error) {
        res.json({
            message : error.message
        })
    }
}

const updateCourse = async (req,res) => {
    try {
        const adminId = req.adminId;
        const {title,description,price,imageUrl,courseId} = req.body;
        
        const course = await courseModel.updateOne({
            _id : courseId,
            creatorId : adminId,
        },
        {
            title,
            description,
            price,
            imageUrl,
        }
    )
        res.json({
            message : "course updated",
            courseId : course._id,
        })
    } catch (error) {
        res.status(404).json({
            message : error.message,
        })
    }
}

const courseBulk = async (req,res) => {
    try {
        const adminId = req.adminId;        
        const courses = await courseModel.find({
            creatorId : adminId,
        })
        res.json({
            message : "you course updated",
            courses
        })
    } catch (error) {
        res.status(404).json({
            message : error.message,
        })
    }
}

module.exports = {signUp,signIn,createCourse,updateCourse,courseBulk};
