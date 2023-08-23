const express = require('express');
const router = express.Router();
const patientController = require('../controllers/doctorController');
const patientAuthMiddleware = require('../auth/doctorAuthMiddleware');

router.post('/register', patientController.register);
router.post('/login', patientController.login);
router.get('/profile', patientAuthMiddleware, patientController.getProfile);

module.exports = router;