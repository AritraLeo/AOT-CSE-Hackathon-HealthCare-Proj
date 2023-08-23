const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    id: { type: String, required: true },
    doctor_name: { type: String, required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    day: { type: String, required: true }, // Day of the appointment, e.g., "monday"
    time_slot: { type: Number, required: true },
    status: { type: String, default: 'booked' }, // Appointment status: "booked" or other states
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
