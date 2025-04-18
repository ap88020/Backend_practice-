const express = require('express');
const {UserModel,TodoModel} = require('./db');
const jwt = require('jsonwebtoken');
const jwt_secret = "key";
const bcrypt = require('bcrypt');
const {z} = require('zod');

const signUp =  async (req,res)=> {
    const requiredBody = z.object({
        email : z.string().min(3).max(100).email(),
        password : z.string().min(3).max(30),
        name : z.string().min(3).max(100),
    })
    const parseDataWithSuccess = requiredBody.parse(req.body);
    if(!parseDataWithSuccess){
        res.json({
            message : "Incorrect formate",
        })
        return;
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    
    try {
        const hashPassword = await bcrypt.hash(password,5);
        console.log(hashPassword);
    
        await UserModel.create({
            email : email,
            password : hashPassword,
            name : name,
        })
        
        res.json({
            message : "You are logged In",
        })
    } catch (error) {
        res.json({
            error : error,
        })
    }
}
const signIn = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await UserModel.findOne({
            email : email,
        })
    
        if(!user){
            res.json({
                message : "user is not found on DB", 
            })
        }
        const passwordMatch = await bcrypt.compare(password,user.password);
        
        if(!passwordMatch){
            res.status(403).json({
                message : "password is wrong",
            })
        }else{
            const token = jwt.sign({id : user._id},jwt_secret);
            res.status(200).json({
                token : token,
                user : {
                    name : user.name,
                    email : user.email,
                }
            })
        }
    } catch (error) {
        res.json({
            error : error,
        })
    }
}

const todo = async (req,res) => {
    const {title , done} = req.body;
    const userId = req.userId;

    try {
        await TodoModel.create({
            title,
            done,
            userId,
        })
    
        res.json({
            userId : userId,
            message : "Todos created"
        })
    } catch (error) {
        res.json({
            error : error
        })
    }

}

const todos = async (req,res) => {
    try {
        const userId = req.userId;
        const todos =  await TodoModel.findOne({userId});
        res.json({
            todos : todos,
        })
    } catch (error) {
        res.json({
            error : error,
        })
    }
}

module.exports = {signIn,signUp,todo,todos}; 

