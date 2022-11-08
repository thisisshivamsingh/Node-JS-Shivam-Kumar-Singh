const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const dbConnect = require("../mongodb/studentMongodb");
const Joi = require("joi");
const mongodb = require("mongodb");

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

router.post("/results", jwtVerify, async (req, resp) => {
  const joiSchema = Joi.object({
    resultid: Joi.number().required(),
    studentname: Joi.string().required(),
    result: Joi.string().required(),
  });

  const isValid = joiSchema.validate(req.body);
  console.log("isValid", isValid);
  if (isValid.error) {
    return resp.status(400).json({
      message: "Please Check Request Body",
      error: isValid.error.details[0].message,
    });
  } else {
    let data = await dbConnect("results");
    let result = await data.insert(req.body);
    return resp.send(result);
  }
});

router.post("/fees", jwtVerify, async (req, resp) => {
  const joiSchema = Joi.object({
    feeid: Joi.number().required(),
    studentname: Joi.string().required(),
    fees: Joi.string().required(),
  });

  const isValid = joiSchema.validate(req.body);
  console.log("isValid", isValid);
  if (isValid.error) {
    return resp.status(400).json({
      message: "Please Check Request Body",
      error: isValid.error.details[0].message,
    });
  } else {
    let data = await dbConnect("fees");
    let result = await data.insert(req.body);
    return resp.send(result);
  }
});

router.delete("/results/:id", jwtVerify, async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect("results");
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

router.delete("/fees/:id", jwtVerify, async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnect("fees");
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
});

module.exports = router;
