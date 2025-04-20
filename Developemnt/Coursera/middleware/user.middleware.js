const {Router} = require('express');
const {userModel,purchaseModel} = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwt_secret_user } = require('../config');

const signUp = async (req,res) => {
    const {email,password,firstName,lastName} = req.body;
    try {
        const haspassword = await bcrypt.hash(password,10);
        await userModel.create({
            email,
            password : haspassword,
            firstName,
            lastName
        });
        res.json({
            message : "you signed in",
        })
    } catch (error) {
        res.status(403).json({
            error : error.message,
        })
    }
}
const signIn =  async (req,res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email : email});
        if(!user){
            res.status(400).json({
                message : "invalid credentials",
            })
        }else{
            const token = jwt.sign({
                id : user._id
            },jwt_secret_user);
            
            res.status(200).json({
                name : user.firstName,
                token : token,
            });
        }
        res.json({
            message : "sign in endpoint",
        })
    } catch (error) {
        res.status(403).json({
            error : error.message,
        })
    }
}
const purchases = async (req, res) => {
    try {
        const userId = req.userId;

        const purchases = await purchaseModel
            .find({ userId })
            .populate('courseId', 'title'); // this will add course title

        res.json({ purchases });
    } catch (error) {
        res.status(403).json({ error: error.message });
    }
};
    



module.exports = {signUp,signIn,purchases};