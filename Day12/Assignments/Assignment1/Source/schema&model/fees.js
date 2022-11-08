const mongoose = require("mongoose");
const feesSchema = new mongoose.Schema({
  feeid: Number,
  studentname: String,
  fees: String,
});

module.exports = mongoose.model("fees", feesSchema);
