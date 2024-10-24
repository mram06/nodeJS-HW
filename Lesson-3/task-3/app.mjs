// Задача 3. Розробити програму з такими функціональними можливостями:
// обробка статичних маршрутів:
// “/” --------- Вітання користувача
// “/goals” ---- Ваші цілі

// обробка статичних файлів:
// about -------- містить тему та умову задачі
// news --------- містить перелік важливі новини (для Вас)

// обробка параметрів запитів:
// /info/:myLinks ------ у залежності від значення параметра повертає сторінку з :
// «sites» -  адресами улюблених сайтів
// «films» -  адреси улюблених онлайн кінотеатрі
// «me» - або інформацію про себе

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.status(200).send("Привіт користувач!");
});
app.get("/goals", (req, res) => {
  res
    .status(200)
    .send(
      "Мета: досягти успіху в програмуванні та постійно вдосконалювати навички."
    );
});
app.get("/about", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/about.html"));
});
app.get("/news", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "public/news.html"));
});
app.get("/info/:myLinks", (req, res) => {
  switch (req.params.myLinks) {
    case "sites":
      return res
        .status(200)
        .sendFile(path.join(__dirname, "public/sites.html"));
    case "films":
      return res
        .status(200)
        .sendFile(path.join(__dirname, "public/films.html"));
    case "me":
      return res.status(200).sendFile(path.join(__dirname, "public/me.html"));

    default:
      return res.status(404).send("Not found");
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
