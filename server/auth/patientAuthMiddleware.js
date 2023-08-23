const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');

const patientAuthMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key'); // Replace with your own secret key
        const patient = await Patient.findById(decoded.id);

        if (!patient) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.patient = patient;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = patientAuthMiddleware;
