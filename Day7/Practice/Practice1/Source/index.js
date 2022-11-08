const morgan = require("morgan");
const helmet = require("helmet");
// const Joi = require("joi");
const logger = require("./logger");
const authentication = require("./authentication");
const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
// app.use(helmet());
// app.use(morgan("tiny"));

// app.use(logger);

// app.use(authentication);

// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// app.use("/user/:id", (req, res, next) => {
//   console.log("Request Type:", req.method);
//   next();
// });

// app.get("/user/:id", (req, res, next) => {
//   res.send("USER");
// });

// app.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request URL:", req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Request Type:", req.method);
//     next();
//   }
// );

// app.get(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("ID:", req.params.id);
//     next();
//   },
//   (req, res, next) => {
//     res.send("User Info");
//   }
// );

// app.get("/user/:id", (req, res, next) => {
//   res.send(req.params.id);
// });

// app.get(
//   "/user/:id",
//   (req, res, next) => {
//     if (req.params.id === "0") next("route");
//     else next();
//   },
//   (req, res, next) => {
//     res.send("regular");
//   }
// );

// app.get("/user/:id", (req, res, next) => {
//   res.send("special");
// });

// function logOriginalUrl(req, res, next) {
//   console.log("Request URL:", req.originalUrl);
//   next();
// }

// function logMethod(req, res, next) {
//   console.log("Request Type:", req.method);
//   next();
// }

// const logStuff = [logOriginalUrl, logMethod];
// app.get("/user/:id", logStuff, (req, res, next) => {
//   res.send("User Info");
// });

// router.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// router.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log("Request URL:", req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log("Request Type:", req.method);
//     next();
//   }
// );

// router.get(
//   "/user/:id",
//   (req, res, next) => {
//     if (req.params.id === "0") next("route");
//     else next();
//   },
//   (req, res, next) => {
//     res.render("regular");
//   }
// );

// router.get("/user/:id", (req, res, next) => {
//   console.log(req.params.id);
//   res.render("special");
// });

// app.use("/", router);

// router.use((req, res, next) => {
//   if (!req.headers["x-auth"]) return next("router");
//   next();
// });

// router.get("/user/:id", (req, res) => {
//   res.send("hello, user!");
// });

// app.use("/admin", router, (req, res) => {
//   res.sendStatus(401);
// });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.listen(3000, () => {
  console.log("listening on port 3000...");
});
