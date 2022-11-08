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

router.get(
  "/emps/:id/child/assignments/:assignmentId",
  middleware,
  (req, res) => {
    console.log("id", req.params.id, "assignmentId", req.params.assignmentId);
    const newApi = apiData.assigment.filter(
      (elem) => elem.assignmentId == req.params.assignmentId
    );
    res.send(newApi);
  }
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
