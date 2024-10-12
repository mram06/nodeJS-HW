// Задача 3. Через параметри запиту передають операцію (add, subtract, mult) і числа (розділені дефісами),
// які треба опрацювати. Знайти результат і повернути користувачу. Наприклад при запиті:
// http://localhost:3000/add/12-4-23-45   - треба знайти суму чисел 12,4,23,45

import { createServer } from "node:http";

const server = createServer((req, res) => {
  const url = req.url.slice(1).split("/");
  const operation = url[0];

  if (url[1]) {
    let numbers = url[1]?.split("-");
    numbers = numbers?.map((number) => parseInt(number));

    if (operation === "add") {
      const sum = numbers.reduce((prevValue, number) => (prevValue += number));
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Sum is ${sum}\n`);
    }
    if (operation === "subtract") {
      const subtract = numbers.reduce(
        (prevValue, number) => (prevValue -= number)
      );
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Subtract is ${subtract}\n`);
    }
    if (operation === "mult") {
      const mult = numbers.reduce((prevValue, number) => (prevValue *= number));
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Mult is ${mult}\n`);
    }
  } else {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end(`Wrong url!\n`);
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
