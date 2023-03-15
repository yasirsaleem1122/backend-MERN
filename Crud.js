const http = require('http');

const port = 4000;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url == "/") {
    fetch("").then((res) => res.JSON).then((data) => res.end(JSON.stringify(data.users)))
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); 
});
server.listen(port, () => {
  console.log(`Server running at http://:${port}/`);
});




