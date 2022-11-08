const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const emplData = require("../db.json");

/* GET customers listing without protection. */

router.get("/employee", jwtVerify, (req, res, next) => {
  res.json(emplData);
});

module.exports = router;
