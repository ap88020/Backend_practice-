const express = require('express');
const {UserModel,TodoModel} = require('./db');
const jwt = require('jsonwebtoken');
const jwt_secret = "key";

const signUp =  async (req,res)=> {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email : email,
        password : password,
        name : name,
    })
    
    res.json({
        message : "You are logged In",
    })
    console.log(req.body);
}
const signIn = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email : email,
    })

    if(!user){
        res.status(403).json({
            message : "incorrect credentials",
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
}

const todo = async (req,res) => {
    const {title , done} = req.body;
    const userId = req.userId;

    await TodoModel.create({
        title,
        done,
        userId,
    })

    res.json({
        userId : userId,
        message : "Todos created"
    })
}

const todos = async (req,res) => {
    const userId = req.userId;
    const todos =  await TodoModel.findOne({userId});
    res.json({
        todos : todos,
    })
}

module.exports = {signIn,signUp,todo,todos};

