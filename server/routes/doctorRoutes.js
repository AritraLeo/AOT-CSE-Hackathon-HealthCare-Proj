const express = require('express');
const router = express.Router();
const doctorController = require('../controller/doctorController');
const doctorAuthMiddleware = require('../auth/doctorAuthMiddleware');

router.post('/register', doctorController.registerDoctor);
router.post('/login', doctorController.login);
router.get('/profile/:id', doctorAuthMiddleware, doctorController.getProfile);

module.exports = router;
