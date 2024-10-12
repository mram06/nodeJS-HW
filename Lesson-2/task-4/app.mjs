// Задача 4. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”)
// повертає створені HTML документи (розмістіть їх там же, де і додаток), що описують: інформацію про себе,
// інфорімацію про улюблену кав’ярню,  інформацію про улюблений музичний гурт.

import { createServer } from "node:http";
import fs from "fs";

const server = createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("index.html", function (error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error!\n");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  if (fs.existsSync(`${req.url.slice(1)}.html`)) {
    fs.readFile(`${req.url.slice(1)}.html`, function (error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error!\n");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
