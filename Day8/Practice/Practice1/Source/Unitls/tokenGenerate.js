const jwt = require("jsonwebtoken");
global.config = require("../config");

const jwtGenerator = (userData) => {
  return jwt.sign(userData, global.config.secretKey, {
    algorithm: global.config.algorithm,
    expiresIn: "5m",
  });
};

module.exports = jwtGenerator;
