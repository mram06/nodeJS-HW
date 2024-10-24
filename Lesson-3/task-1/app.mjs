// Задача 1. Розробити додаток з такими маршрутами:
// Маршрут -- Що повертає
// season --- повертає пору року
// day ------ повертає поточний день
// time ----- повертає час дня (ранок, обід, вечеря)

import express from "express";
const app = express();
const PORT = 3000;

import { getSeason, getDayTime } from "./helpers.mjs";

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/season", (req, res) => {
  res.send(getSeason());
});

app.get("/day", (req, res) => {
  res.send(new Date().getDate().toString());
});

app.get("/time", (req, res) => {
  res.send(getDayTime());
});

app.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
});
