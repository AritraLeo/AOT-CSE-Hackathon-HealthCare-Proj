const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    qualification: { type: String, required: true },
    available_time_slots: {
        type: Map,
        of: [Number], // Array of time slots
    },
    doctor_id: { type: String, required: true },
    created_at: { type: Date, default: Date.now() },
    modified_at: { type: Date, default: Date.now()},
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
