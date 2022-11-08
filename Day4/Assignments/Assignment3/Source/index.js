const http = require("http");
const url = require("url");

const server = http.createServer((req, resp) => {
  const data = url.parse(req.url, true).query;
  resp.writeHead(200, { "Content-Type": "text/html" });
  const alpData = String(data.name).split("");
  for (const elem of alpData) {
    if ("aeiouAEIOU".includes(elem)) {
      resp.write(JSON.stringify(elem));
      break;
    }
  }
  resp.end();
});

server.listen(3001, () => console.log("listening on port 3001..."));
