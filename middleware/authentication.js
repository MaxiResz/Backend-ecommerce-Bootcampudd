const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ message: 'Se requiere autenticación' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const user = jwt.verify(token, process.env.YOUR_SECRET_KEY);
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}
