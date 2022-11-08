const express = require("express");
const app = express();
const router = express.Router();

const apiData = require("./db.json");

app.use(express.json());
app.use(router);

function logOriginalUrl(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  console.log(Date.now());
  next();
}
function logTime(req, res, next) {
  console.log("Request URL:", req.originalUrl);
  console.log(new Date().toLocaleString());
  next();
}

const middleware = [logOriginalUrl, logTime];

router.get("/emps/:id/child/assignments", middleware, (req, res) => {
  console.log(req.params.id);
  res.send(apiData);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
