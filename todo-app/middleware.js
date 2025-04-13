const express = require('express');
const app = express();
app.use(express.json());
const jwt = require('jsonwebtoken');
const jwt_secret_key = "key";

const users = [];

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
};

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
};

const endPoint = (req,res) => {
    const token = req.headers.token;

    const decoded = jwt.verify(token,jwt_secret_key);

    if(decoded.username){
        const foundUser = users.find(user => user.username === decoded.username);

        res.json({
            userName : foundUser.username,
            userPassword : foundUser,
        })
    }
};

module.exports = {signUp , signIn , endPoint};