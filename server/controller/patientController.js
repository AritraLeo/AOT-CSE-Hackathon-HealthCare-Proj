const jwt = require('jsonwebtoken');
const Patient = require('../models/patientModel');
const bcrypt = require('bcrypt');

const registerPatient = async (req, res) => {
    const { name, location, email, password } = req.body;

    try {
        // Check if a patient with the same email already exists
        const existingPatient = await Patient.findOne({ email });

        if (existingPatient) {
            return res.status(400).json({ message: 'Patient with this email already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        const newPatient = new Patient({
            name,
            location,
            email,
            password: hashedPassword,
        });

        await newPatient.save();

        // Generate a JWT token for the newly registered patient
        const token = jwt.sign({ user_id: newPatient._id }, 'your-secret-key', { expiresIn: '7d' });

        res.status(201).json({ message: 'Patient registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering patient', error: error.message });
    }
};


const login = async (req, res) => {
    // Implement patient login logic
    // After successful login, create and send a JWT token
    const patient = await Patient.findOne({ email: req.body.email });

    if (!patient) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: patient._id }, 'your-secret-key', { expiresIn: '7d' });

    res.json({ token });
};

module.exports = {
    login,
    registerPatient
};
