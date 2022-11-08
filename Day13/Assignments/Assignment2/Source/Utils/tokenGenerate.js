const jwt = require("jsonwebtoken");
global.config = require("../config/config");

const jwtGenerator = (userData) => {
  return jwt.sign(userData, global.config.secretKey, {
    algorithm: global.config.algorithm,
    expiresIn: "59m",
  });
};

module.exports = jwtGenerator;
