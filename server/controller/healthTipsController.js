const HealthTips = require('../models/healthTipsModel');

const getHealthTips = async (req, res) => {
    const { diseaseOrSymptom } = req.params;

    try {
        const healthTips = await HealthTips.findOne({
            $or: [{ nameOfDisease: diseaseOrSymptom }, { symptom: diseaseOrSymptom }],
        });

        if (!healthTips) {
            return res.status(404).json({ message: 'Health tips not found' });
        }

        res.json({ healthTips });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving health tips', error: error.message });
    }
};

module.exports = {
    getHealthTips,
};