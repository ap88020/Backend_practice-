const jwt = require('jsonwebtoken');
const jwt_secret_key = "key";

const auth = (req, res, next) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, jwt_secret_key);
    req.user = decoded;

    if (decoded.username) {
        next();
    } else {
        res.status(401).json({ message: "You are not logged in" });
    }
};

module.exports = auth;
