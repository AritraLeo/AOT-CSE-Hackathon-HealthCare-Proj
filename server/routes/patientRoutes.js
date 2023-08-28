const express = require('express');
const router = express.Router();
const patientController = require('../controller/patientController');
const patientAuthMiddleware = require('../auth/doctorAuthMiddleware');

router.post('/register', patientController.registerPatient);
router.post('/login', patientController.login);
router.get('/profile', patientAuthMiddleware, patientController.getProfile);

module.exports = router;