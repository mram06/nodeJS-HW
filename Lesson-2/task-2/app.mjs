// Задача 2. Користувач через роут ‘/save_num/число’ може передати на сервер якесь число. Ці числа поступово треба зберігати у текстовому файлі numbers.txt. Наприклад, використовуючи такий роут:
// http://localhost:3000/save_num/78  -  у файл треба додати число 78.
// А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.

import { createServer } from "node:http";
import fs from "fs";
import { appendFile, unlink, writeFile } from "node:fs/promises";

const filePath = "numbers.txt";

const server = createServer((req, res) => {
  const saveNumUrl = req.url.slice(1).split("/");
  if (saveNumUrl[0] === "save_num" && saveNumUrl[1]) {
    if (fs.existsSync(filePath)) {
      try {
        appendFile(filePath, `${saveNumUrl[1]},`);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Number added to file!\n");
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error ${error}`);
      }
    } else {
      try {
        writeFile(filePath, `${saveNumUrl[1]},`);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("File created and number added to file!\n");
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error ${error}`);
      }
    }
  } else if (saveNumUrl[0] === "save_num") {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Wrong url!\n");
  }

  if (req.url === "/remove") {
    try {
      unlink(filePath);
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("File removed!\n");
    } catch (error) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error ${error}`);
    }
  }
  if (req.url === "/sum") {
    fs.readFile(filePath, function (error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error ${error}`);
        return;
      }
      let numbers = data.toString().split(",");
      numbers.pop();
      numbers = numbers.map((el) => parseInt(el));
      const sum = numbers.reduce((prevValue, number) => (prevValue += number));

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Sum is ${sum}`);
    });
  }
  if (req.url === "/mult") {
    fs.readFile(filePath, function (error, data) {
      if (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Error ${error}`);
        return;
      }
      let numbers = data.toString().split(",");
      numbers.pop();
      numbers = numbers.map((el) => parseInt(el));
      const mupltiple = numbers.reduce(
        (prevValue, number) => (prevValue *= number)
      );

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Mupltiple is ${mupltiple}`);
    });
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
