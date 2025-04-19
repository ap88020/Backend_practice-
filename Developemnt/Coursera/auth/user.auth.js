const jwt = require('jsonwebtoken');
const { jwt_secret_user } = require('../config');

const userAuth = (req,res,next) => {
    try {
        const token = req.headers.token;
        const decoded = jwt.verify(token,jwt_secret_user);

        if(!decoded){
            res.status(403).json({
                message : "you are not signed In",
            })
        }else{
            req.userId = decoded.id;
            next();
        }

    } catch (error) {
        res.status(404).json({
            message : error.message,
        })
    }
}
module.exports = {
    userAuth : userAuth,
}