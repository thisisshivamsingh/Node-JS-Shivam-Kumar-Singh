const http = require("http");
const url = require("url");
const events = require("events");

const event = new events.EventEmitter();

event.on("countAPI", (string) => {
  console.log(string);
});

const server = http.createServer((req, resp) => {
  const { pathname } = url.parse(req.url, true);
  if (pathname === "/") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<h1><a href='/exam'>Start Exam</a></h1>");
    resp.end();
  }
  if (pathname === "/exam") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("<h1>Exam Started</h1>");
    event.emit("countAPI", "Exam Started");
    setTimeout(() => {
      event.emit("countAPI", "Exam Finished");
    }, 3000);
    resp.end();
  }
});

server.listen(4000, () => {
  console.log("listening on port 4000...");
});
