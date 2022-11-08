let jwt = require("jsonwebtoken");
const router = require("express").Router();
global.config = require("../config");

/* Post Users Login */

router.post("/login", (req, res, next) => {
  let userdata = {
    username: req.body.username,
    password: req.body.password,
  };

  let token = jwt.sign(userdata, global.config.secretKey, {
    algorithm: global.config.algorithm,
    expiresIn: "5m",
  });

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

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTY2NzQxNTgwMSwiZXhwIjoxNjY3NDE2MTAxfQ.sOHk-iGP9qCrjo-VBm3sZeLNRbZLWka3uhadZwwgGUw"
