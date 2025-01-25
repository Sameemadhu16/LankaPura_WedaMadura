const mongoose = require('mongoose');

const AyurvedicTreatmentSchema = new mongoose.Schema({
  treatmentName: {
    type: String,
    required: true,
    // trim: true
  },
  description: {
    type: String,
    required: true,
    // trim: true
  },  
  
  
  
});

const AyurvedicTreatment = mongoose.model('ourtreatmentmodel', AyurvedicTreatmentSchema);

module.exports = AyurvedicTreatment;
