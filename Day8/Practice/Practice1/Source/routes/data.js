const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");

/* GET customers listing without protection. */

router.get("/data", jwtVerify, (req, res, next) => {
  let customerdata = [
    { customerid: 1, customername: "Mahfuz Bappy" },
    { customerid: 2, customername: "Shamim Uddin" },
    { customerid: 3, customername: "Ishani Isha" },
  ];

  res.json(customerdata);
});

module.exports = router;
