const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  if (req.url === "/upload") {
    fs.readFile("test.html", (error, result) => {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(result);
      resp.end();
    });
  }
});

server.listen(3001, () => {
  console.log("listening on port 3001...");
});
