const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const doctorAuthMiddleware = require('../auth/doctorAuthMiddleware');

router.post('/register', doctorController.register);
router.post('/login', doctorController.login);
router.get('/profile', doctorAuthMiddleware, doctorController.getProfile);

module.exports = router;
