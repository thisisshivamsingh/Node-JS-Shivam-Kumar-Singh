const mongoose = require("mongoose");
const doctorsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  departmentId: { type: String, required: true },
  hospitalName: { type: String, required: true },
});

module.exports = mongoose.model("doctors", doctorsSchema);

// doctor: [{ type: String }],
// numberOfDoctors: { type: Number },
// doctors: [
//   {
//     name: { type: String, required: true },
//   },
// ],
// drugs: [String],
