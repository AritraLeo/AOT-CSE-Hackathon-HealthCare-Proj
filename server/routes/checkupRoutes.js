const express = require('express');
const router = express.Router();
const checkupController = require('../controller/checkupController');

// Define routes for checkup-related operations
router.post('/add-checkup', checkupController.addCheckup);

module.exports = router;
