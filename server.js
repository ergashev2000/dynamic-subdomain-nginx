const http = require("http");

const server = http.createServer((req, res) => {
  const subdomain = req.headers.host.split(".")[0];
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Welcome to ${subdomain}</h1>`);
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
