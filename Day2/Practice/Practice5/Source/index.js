const fs = require("fs");

fs.mkdir("./demofolder", (err) => {
  if (err) {
    console.log("error 1", err);
  }
  console.log("folder created");
});

fs.writeFile("./demofolder/demofile.txt", "Hello World!", (err, data) => {
  if (err) {
    console.log("error 2", err);
  } else {
    console.log("demo file created");
  }
});

fs.writeFile("./person.txt", "Hello World Person", (err, data) => {
  if (err) {
    console.log("error 3", err);
  } else {
    console.log("person file created");
  }
});

fs.readFile("./person.txt", "UTF-8", (err, data) => {
  if (err) {
    console.log("error 4", err);
  } else {
    fs.writeFile("./demofolder/person.txt", data, (err, data1) => {
      if (err) {
        console.log("error 5", err);
      } else {
        console.log("person file moved");
      }
    });
  }
});

fs.unlink("./person.txt", () => {
  console.log("person file deleted from root");
});

fs.unlink("./demofolder/demofile.txt", () => {
  console.log("demo file deleted");
});
