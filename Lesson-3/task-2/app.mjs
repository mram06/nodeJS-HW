// Задача 2. Розробити серверну частину додатку, який за відповідними маршрутами (“/”, “/coffee”, “/music”) повертає створені HTML документи.

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./index.html"));
});
app.get("/coffee", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./coffee.html"));
});
app.get("/music", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "./music.html"));
});
// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
