const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');

const doctorAuthMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your own secret key
        const doctor = await Doctor.findById(decoded.id);

        if (!doctor) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.doctor = doctor;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = doctorAuthMiddleware;
