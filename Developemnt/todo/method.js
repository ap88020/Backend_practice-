const method = (req,res, next) => {
    console.log(req.method + ` method came`);
    next();
}

module.exports = method;