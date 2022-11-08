global.config = require("../config/config");
let jwt = require("jsonwebtoken");

const jwtVerify = (req, res, next) => {
  const token = req.headers["authorization"];
  const jwtToken = token.split(" ")[1];
  jwt.verify(
    jwtToken,
    global.config.secretKey,
    {
      algorithm: global.config.algorithm,
    },
    function (err, decoded) {
      console.log(err);
      if (err) {
        let errordata = {
          message: err.message,
          expiredAt: err.expiredAt,
        };
        console.log(errordata);
        // return res.status(401).json({
        //   message: "Unauthorized Access",
        // });
      } else {
        req.decoded = decoded;
        next();
        // return res.status(403).json({
        //   message: "Forbidden Access",
        // });
      }
    }
  );
};

module.exports = jwtVerify;
