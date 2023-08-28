const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');

// Define routes for appointment-related operations
router.post('/make-appointment', appointmentController.makeAppointment);

module.exports = router;
