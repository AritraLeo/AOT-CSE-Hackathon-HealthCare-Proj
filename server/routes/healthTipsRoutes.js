const express = require('express');
const router = express.Router();
const healthTipsController = require('../controller/healthTipsController');

router.get('/health-tips/:diseaseOrSymptom', healthTipsController.getHealthTips);

module.exports = router;
