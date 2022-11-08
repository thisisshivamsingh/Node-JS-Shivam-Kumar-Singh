const express = require("express");
const app = express();

app.use(express.json());
const loginRoute = require("./routes/login.js");
const protectedRoute = require("./routes/data.js");

app.use("/users", loginRoute);
app.use("/customers", protectedRoute);

app.listen(3000, () => console.log("Server up on port", 3000));
