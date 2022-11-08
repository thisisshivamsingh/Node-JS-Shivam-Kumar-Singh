const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  fs.readFile("./person.json", "utf-8", (err, item) => {
    resp.write(item);
    resp.end();
  });
});

server.listen(3001, () => console.log("listening on port 3001..."));
