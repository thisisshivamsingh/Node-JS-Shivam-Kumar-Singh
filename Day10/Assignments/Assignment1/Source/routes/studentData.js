const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const dbConnect = require("../mongodb/studentMongodb");

/* GET customers listing without protection. */

router.get("/results", jwtVerify, (req, res, next) => {
  const main = async () => {
    let data = await dbConnect("results");
    data = await data.find().toArray();
    res.json(data);
    console.log(data);
  };

  main();
});

router.get("/fees", jwtVerify, (req, res, next) => {
  const main = async () => {
    let data = await dbConnect("fees");
    data = await data.find().toArray();
    res.json(data);
    console.log(data);
  };

  main();
});

module.exports = router;
