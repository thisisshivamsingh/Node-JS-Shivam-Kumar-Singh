const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hospital-det", {
    useUnifiedTopology: true,
  })
  .then(() => console.log("Server Up"));
