const express = require('express');
const jwt = require('jsonwebtoken');
const jwt_secret = "key";

const auth = (req,res,next) => {
    const token = req.headers.token;
    const decodeData = jwt.verify(token,jwt_secret);

    if(decodeData){
        req.userId = decodeData.id;
        next();
    }else{
        res.json({
            message: "Incorrect credentials"
        })
    }
}

module.exports = auth;