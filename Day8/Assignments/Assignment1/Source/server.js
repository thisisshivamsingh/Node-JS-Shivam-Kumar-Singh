const express = require("express");
const app = express();

app.use(express.json());
const loginRoute = require("./routes/login.js");
const protectedRoute = require("./routes/data.js");

app.use("/users", loginRoute);
app.use("/students", protectedRoute);

app.listen(3000, () => console.log("Server up on port", 3000));
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzQxNjc1NiwiZXhwIjoxNjY3NDE3MDU2fQ._ymgrkAUihf72XCVRSQeybzMxPU5ZDW_rF25rvd1Ym4"
