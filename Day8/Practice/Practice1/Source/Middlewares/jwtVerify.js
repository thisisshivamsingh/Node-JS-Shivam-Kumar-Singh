global.config = require("../config");
let jwt = require("jsonwebtoken");

const jwtVerify = (req, res, next) => {
  var token = req.headers["x-access-token"];
  console.log(token);
  jwt.verify(
    token,
    global.config.secretKey,
    {
      algorithm: global.config.algorithm,
    },
    function (err, decoded) {
      if (err) {
        let errordata = {
          message: err.message,
          expiredAt: err.expiredAt,
        };
        console.log(errordata);
        return res.status(401).json({
          message: "Unauthorized Access",
        });
      } else {
        req.decoded = decoded;
        console.log(decoded);
        next();
        return res.status(403).json({
          message: "Forbidden Access",
        });
      }
    }
  );
};

module.exports = jwtVerify;
