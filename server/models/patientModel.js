const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
