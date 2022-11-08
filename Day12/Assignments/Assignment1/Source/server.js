const express = require("express");
const app = express();

app.use(express.json());
const loginRoute = require("./routes/login.js");
const studentProtectedRoute = require("./routes/studentData.js");

app.use("/users", loginRoute);
app.use("/students", studentProtectedRoute);

app.listen(3000, () => console.log("Server up on port", 3000));

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzgzODk4NSwiZXhwIjoxNjY3ODQyNTI1fQ.hSO1ksFoYSXZtEDpz9v4_ckjtjTHWUf11ICw5B7vOrA
