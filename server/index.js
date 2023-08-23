const express = require('express');
const app = express();

// Import and use your route files
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes'); // Add this line
const appointmentRoutes = require('./routes/appointmentRoutes');
const healthTipsRoutes = require('./routes/healthTipsRoutes');
const checkupRoutes = require('./routes/checkupRoutes'); // Add this line

app.use('/doctors', doctorRoutes);
app.use('/patients', patientRoutes); // Use the appropriate base URL for patients
app.use('/appointments', appointmentRoutes);
app.use('/health-tips', healthTipsRoutes);
app.use('/checkups', checkupRoutes); // Use the appropriate base URL for checkups

// ... Other configurations and middleware ...

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
