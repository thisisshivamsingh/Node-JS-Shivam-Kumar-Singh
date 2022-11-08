const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
require("../config/mongoConfigResultsDet");
const Results = require("../schema&model/results");
const Fees = require("../schema&model/fees");
const Employees = require("../schema&model/employees");

/* GET customers listing without protection. */

router.get("/employee", jwtVerify, async (req, res, next) => {
  let data = await Employees.find();
  res.json(data);
  console.log(data);
});

router.get("/results", jwtVerify, async (req, res, next) => {
  let data = await Results.find();
  res.json(data);
  console.log(data);
});

router.get("/fees", jwtVerify, async (req, res, next) => {
  let data = await Fees.find();
  res.json(data);
  console.log(data);
});

module.exports = router;
