const Checkup = require('../models/checkupModel');
const Patient = require('../models/patientModel');
const Doctor = require('../models/doctorModel');

const addCheckup = async (req, res) => {
    const { patient_id, doctor_id, doctors_remarks } = req.body;

    try {
        // Check if patient and doctor exist
        const patient = await Patient.findById(patient_id);
        const doctor = await Doctor.findById(doctor_id);

        if (!patient || !doctor) {
            return res.status(404).json({ message: 'Patient or doctor not found' });
        }

        // Create a new checkup entry
        const newCheckup = new Checkup({
            doctors_remarks,
            patient_id,
            doctor_id,
        });

        // Save the new checkup
        await newCheckup.save();

        res.status(201).json({ message: 'Checkup added successfully', checkup: newCheckup });
    } catch (error) {
        res.status(500).json({ message: 'Error adding checkup', error: error.message });
    }
};

module.exports = {
    addCheckup,
};
