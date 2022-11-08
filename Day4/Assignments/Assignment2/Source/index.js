const http = require("http");
const url = require("url");

http.get("http://localhost:3001/", (req, res) => {});

const server = http.createServer((req, resp) => {
  const data = url.parse(req.url, true).query;
  resp.writeHead(200, { "Content-Type": "text/html" });
  resp.write(JSON.stringify(Number(data.param1) + Number(data.param2)));
  resp.end();
});

server.listen(3001, () => console.log("listening on port 3001..."));
