const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const dbConnect = require("../mongodb/employeeMongodb");

/* GET customers listing without protection. */

router.get("/employee", jwtVerify, (req, res, next) => {
  const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.json(data);
    console.log(data);
  };

  main();
});

module.exports = router;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzQ5NjQ5MCwiZXhwIjoxNjY3NDk2NzkwfQ.W-YjPSRQlcYzokxu4LKjAN-RacI_kxM-cIRURMbHNYI
