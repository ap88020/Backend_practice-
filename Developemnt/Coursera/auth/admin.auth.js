const jwt = require("jsonwebtoken");
const {jwt_secret_admin} = require('../config');

const adminAuth = (req,res,next) =>{
    const token = req.headers.token;
    const decoded  = jwt.verify(token,jwt_secret_admin);

    if(decoded){
        req.adminId = decoded.id;
        next();
    }else{
        res.status(404).res.json({
            message : "you are not signed In",
        })
    }
}
module.exports  = {
    adminAuth : adminAuth,
}