let jwt = require("jsonwebtoken");
const router = require("express").Router();
const jwtGenerator = require("../Utils/tokenGenerate");

/* Post Users Login */

router.post("/login", (req, res, next) => {
  let userdata = {
    username: req.body.username,
    password: req.body.password,
  };

  let token = jwtGenerator(userdata);

  // Go to sever for user varification
  if (userdata.username == "admin" && userdata.password == "admin") {
    res.status(200).json({
      message: "Login Successful",
      jwtoken: token,
    });
  } else {
    res.status(401).json({
      message: "Login Failed",
    });
  }
});

module.exports = router;
