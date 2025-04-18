const {adminModel} = require('../db');
const jwt = require('jsonwebtoken');
const jwt_secret = "admin123";
const bcrypt = require('bcrypt');

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
                const token = jwt.sign({id : admin._id},jwt_secret);
                res.status(403).json({
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

module.exports = {signUp,signIn};
