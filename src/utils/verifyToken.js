const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(401).json({
            auth: false,
            message: 'No token provided'
        });
    }

    // Get payload (user_id)
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    // Save id in req object
    req.userId = decoded.id;

    next(); //Continue with the next code
}

module.exports = verifyToken;