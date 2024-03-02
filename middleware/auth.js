const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header("token");

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, "1234", (err, user) => {
        if(err) {
            return res.status(403).json({messege: "Forbidden"});
        }

        req.user = user;
        next();
    })
}

exports = module.exports = {
    authenticateToken
};