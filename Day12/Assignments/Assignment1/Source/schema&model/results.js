const mongoose = require("mongoose");
const resultsSchema = new mongoose.Schema({
  resultid: Number,
  studentname: String,
  result: String,
});

module.exports = mongoose.model("results", resultsSchema);
