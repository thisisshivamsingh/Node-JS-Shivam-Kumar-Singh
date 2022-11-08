const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const dbConnect = require("../mongodb/employeeMongodb");
const Joi = require("joi");
const mongodb = require("mongodb");

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

router.post("/employee", jwtVerify, async (req, resp) => {
  const joiSchema = Joi.object({
    citizenshipId: Joi.number().required(),
    addressLine2: Joi.string().required(),
    country: Joi.string().required(),
  });

  const isValid = joiSchema.validate(req.body);
  console.log("isValid", isValid);
  if (isValid.error) {
    return resp.status(400).json({
      message: "Please Check Request Body",
      error: isValid.error.details[0].message,
    });
  } else {
    let data = await dbConnect();
    let result = await data.insert(req.body);
    return resp.send(result);
  }
});

router.delete("/employee/:id", jwtVerify, async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzczMTM2OCwiZXhwIjoxNjY3NzM0OTA4fQ.t3PxINiH-JaFv85XXTtB8aO5FGN2lvLMBCreAuoif64
