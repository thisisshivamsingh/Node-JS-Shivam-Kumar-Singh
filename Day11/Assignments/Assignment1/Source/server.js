const express = require("express");
const app = express();

app.use(express.json());
const loginRoute = require("./routes/login.js");
const studentProtectedRoute = require("./routes/studentData.js");
const employeeProtectedRoute = require("./routes/employeeData.js");

app.use("/users", loginRoute);
app.use("/employees", employeeProtectedRoute);
app.use("/students", studentProtectedRoute);

app.listen(3000, () => console.log("Server up on port", 3000));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzU1NDYzOCwiZXhwIjoxNjY3NTU2NDM4fQ.k1Zni2KF0CwOG2NxpcG0pkKG7EfN-pbzLq0hAOHrz_4
