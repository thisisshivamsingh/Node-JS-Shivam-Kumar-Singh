const mongoose = require("mongoose");
const employeesSchema = new mongoose.Schema({
  citizenshipId: Number,
  addressLine2: String,
  country: String,
});

module.exports = mongoose.model("employees", employeesSchema);
