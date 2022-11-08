const express = require("express");
const app = express();

require("./config/mongoConfigHospitalDet");

app.use(express.json());
const loginRoute = require("./routes/login.js");
const departmentProtectedRoute = require("./routes/departmentData.js");

app.use("/users", loginRoute);
app.use("/hospital", departmentProtectedRoute);

app.listen(3000, () => console.log("Server up on port", 3000));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzgwOTI4MSwiZXhwIjoxNjY3ODEyODIxfQ.lKdugfl0eDigLX-9PUK7uOTANh_nEmQie-QUZFgTmqo
