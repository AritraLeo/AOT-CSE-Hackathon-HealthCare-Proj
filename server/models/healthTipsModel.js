const mongoose = require('mongoose');

const healthTipsSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nameOfDisease: { type: String, required: true },
    precautions: { type: String },
    medicines: { type: String },
    symptom: { type: String },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
});

const HealthTips = mongoose.model('HealthTips', healthTipsSchema);

module.exports = HealthTips;
