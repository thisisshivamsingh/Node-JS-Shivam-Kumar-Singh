const mongoose = require("mongoose");
const hospitalsSchema = new mongoose.Schema({
  patient: {
    doctor: [String],
    healthcare: [String],
    drugs: [{ medicine: { type: String }, time: { type: String } }],
    disease: [String],
  },
});

module.exports = mongoose.model("hospitals", hospitalsSchema);
