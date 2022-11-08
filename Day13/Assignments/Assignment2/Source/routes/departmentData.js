const express = require("express");
const router = express.Router();
const jwtVerify = require("../Middlewares/jwtVerify");
const mongodb = require("mongodb");
const Hospitals = require("../schema&model/hospitals");
const Doctors = require("../schema&model/doctors");

/* GET customers listing without protection. */

router.get("/department/:id", jwtVerify, async (req, res, next) => {
  let hospitalData = await Hospitals.find();
  let doctorData = await Doctors.find();
  let id = hospitalData.find((item) =>
    item.patient.doctor.includes(req.params.id)
  );
  let doctorId = id.patient.doctor.find((item) => item == req.params.id);
  res.json(doctorData.find((item) => item._id == doctorId));
});

router.post("/add/:name", jwtVerify, async (req, res, next) => {
  let data = new Doctors(req.body);
  await data.save();
  let hospitalData = await Hospitals.find();
  const newHostpitalData = hospitalData.find(
    (item) => item.patient.name !== req.params.name
  );
  newHostpitalData.patient.doctor.push(data._id);
  const updatedHospital = await newHostpitalData.save();
  res.json(updatedHospital);
});

router.put("/update", jwtVerify, async (req, res, next) => {
  console.log(req.body.departmentId);
  let data = await Doctors.updateOne(
    { departmentId: req.body.departmentId },
    { $set: req.body }
  );
  res.json(data);
});

router.delete("/delete/:id", jwtVerify, async (req, res, next) => {
  let hospitalData = await Hospitals.find();
  let data = await Doctors.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  let id = hospitalData.find((item) =>
    item.patient.doctor.includes(req.params.id)
  );
  const index = id.patient.doctor.indexOf(req.params.id);
  id.patient.doctor.splice(index, 1);
  const updatedHospital = await id.save();
  res.json(updatedHospital);
});

router.get("/patient/:name", jwtVerify, async (req, res, next) => {
  let hospitalData = await Hospitals.find();
  let doctorData = await Doctors.find();
  const newHostpitalData = hospitalData.find(
    (item) => item.patient.name !== req.params.name
  );
  let arr = [];
  for (let i = 0; i < doctorData.length; i++) {
    if (doctorData[i]._id == newHostpitalData.patient.doctor[i])
      arr.push(doctorData[i].name);
  }
  res.json(arr);
});

router.get("/medicine/:name", jwtVerify, async (req, res, next) => {
  let hospitalData = await Hospitals.find();
  const newHostpitalData = hospitalData.find(
    (item) => item.patient.name !== req.params.name
  );
  res.json(newHostpitalData.patient.drugs);
});

router.get("/report/:name", jwtVerify, async (req, res, next) => {
  let hospitalData = await Hospitals.find();
  let doctorData = await Doctors.find();
  const newHostpitalData = hospitalData.find(
    (item) => item.patient.name !== req.params.name
  );
  let arr = [];
  for (let i = 0; i < doctorData.length; i++) {
    if (doctorData[i]._id == newHostpitalData.patient.doctor[i])
      arr.push(doctorData[i]);
  }
  res.json({ newHostpitalData, arr });
});
module.exports = router;
