const Appointment = require('../models/appointmentModel');
const Doctor = require('../models/doctorModel');
const Patient = require('../models/patientModel');

const makeAppointment = async (req, res) => {
    const { doctor_id, patient_id, day, time_slot } = req.body;

    try {
        const doctor = await Doctor.findById(doctor_id);
        const patient = await Patient.findById(patient_id);

        if (!doctor || !patient) {
            return res.status(404).json({ message: 'Doctor or patient not found' });
        }

        const existingAppointment = await Appointment.findOne({
            doctor_id,
            patient_id,
            day,
            time_slot,
        });

        if (existingAppointment) {
            return res.status(400).json({ message: 'Appointment slot already booked' });
        }

        if (!doctor.available_time_slots.get(day).includes(time_slot)) {
            return res.status(400).json({ message: 'Selected time slot is not available' });
        }

        const newAppointment = new Appointment({
            doctor_name: doctor.name,
            doctor_id,
            patient_id,
            day,
            time_slot,
            status: 'booked', // Set the status to "booked"
        });

        await newAppointment.save();

        res.status(201).json({ message: 'Appointment made successfully', appointment: newAppointment });
    } catch (error) {
        res.status(500).json({ message: 'Error making appointment', error: error.message });
    }
};

module.exports = {
    makeAppointment,
};
