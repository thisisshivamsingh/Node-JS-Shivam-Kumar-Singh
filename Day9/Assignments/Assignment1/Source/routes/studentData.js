const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");

/* GET customers listing without protection. */

router.get("/results", jwtVerify, (req, res, next) => {
  let resultdata = [
    { resultid: 1, studentname: "shivam", result: "pass" },
    { resultid: 2, studentname: "shubham", result: "pass" },
    { resultid: 3, studentname: "ramesh", result: "pass" },
  ];
  res.json(resultdata);
});

router.get("/fees", jwtVerify, (req, res, next) => {
  let feedata = [
    { feeid: 1, studentname: "shivam", fees: "pending" },
    { feeid: 2, studentname: "shubham", fees: "received" },
    { feeid: 3, studentname: "ramesh", fees: "received" },
  ];
  res.json(feedata);
});

module.exports = router;
