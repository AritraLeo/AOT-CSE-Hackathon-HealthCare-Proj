const jwt = require('jsonwebtoken');
const Doctor = require('../models/doctorModel');
const bcrypt = require('bcrypt');

const registerDoctor = async (req, res) => {
    const { name, qualification, email, password, available_time_slots } = req.body;

    try {
        // Check if a doctor with the same email already exists
        const existingDoctor = await Doctor.findOne({ email });

        if (existingDoctor) {
            return res.status(400).json({ message: 'Doctor with this email already exists' });
        }

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        const newDoctor = new Doctor({
            name,
            qualification,
            email,
            password: hashedPassword,
            available_time_slots,
        });

        await newDoctor.save();

        // Generate a JWT token for the newly registered doctor
        const token = jwt.sign({ user_id: newDoctor._id }, 'your-secret-key', { expiresIn: '7d' });

        res.status(201).json({ message: 'Doctor registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering doctor', error: error.message });
    }
};


const login = async (req, res) => {
    // Implement doctor login logic
    // After successful login, create and send a JWT token
    const doctor = await Doctor.findOne({ email: req.body.email });

    if (!doctor) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: doctor._id }, 'your-secret-key', { expiresIn: '7d' });

    res.json({ token });
};

const addTimeSlots = async (req, res) => {
    const { doctor_id, time_slots } = req.body;

    try {
        const doctor = await Doctor.findById(doctor_id);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Update the available time slots using the provided map
        for (const [day, slots] of time_slots.entries()) {
            doctor.available_time_slots.set(day, slots);
        }

        await doctor.save();

        res.json({ message: 'Time slots added successfully', doctor });
    } catch (error) {
        res.status(500).json({ message: 'Error adding time slots', error: error.message });
    }
};

const getProfile = async (req, res) => {
    const doctorId = req.params.id; // Assuming the route parameter is named 'id'

    try {
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Remove sensitive information before sending the doctor's profile
        const sanitizedDoctor = {
            _id: doctor._id,
            name: doctor.name,
            qualification: doctor.qualification,
            email: doctor.email,
            available_time_slots: doctor.available_time_slots
        };

        res.json(sanitizedDoctor);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor profile', error: error.message });
    }
};

module.exports = {
    addTimeSlots,
    registerDoctor,
    login,
    getProfile
};
