const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const jwt_secret_key = "key";
const users = require('./data');

const signUp = (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password,
    });

    res.json({
        message : "You signed In",
    })
}

const signIn = (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(user => user.username == username);

    if(!foundUser){
        res.json({
            message : "user is not found",
        })
    }else{
        const token = jwt.sign({
            username,
        },jwt_secret_key);

        res.json({
            token : token,
        })
    }
}
const endPoint = (req, res) => {
    const foundUser = users.find(user => user.username === req.user.username);

    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        userName: foundUser.username,
        userPassword: foundUser.password
    });
};

const todoGet = (req,res) => {};
const todoPost = (req,res) => {};
const todoDelete = (req,res) => {};

module.exports = {signUp, signIn, endPoint, todoGet, todoPost, todoDelete};