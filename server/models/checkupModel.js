const mongoose = require('mongoose');

const checkupSchema = new mongoose.Schema({
    id: { type: String, required: true },
    doctors_remarks: { type: String },
    prescription: { type: String }, // Assuming you will store the file path
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
});

const Checkup = mongoose.model('Checkup', checkupSchema);

module.exports = Checkup;
