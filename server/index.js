const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

// Set up bodyParser for parsing JSON and urlencoded data
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Use CORS middleware
app.use(cors());

// Import your route files
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const healthTipsRoutes = require('./routes/healthTipsRoutes');
const checkupRoutes = require('./routes/checkupRoutes');

// Use your route files
app.use('/doctor', doctorRoutes);
app.use('/patient', patientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/health-tips', healthTipsRoutes);
app.use('/checkups', checkupRoutes);

// ... Other configurations and middleware ...

const CONNECTION_URL = 'mongodb+srv://aot-hackathon-cse:E2CrsHE8JvxrXmJm@cluster0.syr1qx4.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection string
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on Port: http://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log(`${error} did not connect`));
