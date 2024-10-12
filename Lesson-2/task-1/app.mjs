// Задача 1. У консольний додаток передають через параметр пенсійний вік. Наприклад
// node app.mjs –-pension=65
// Потім питаємо у терміналі користувача скільки йому років (використати “readline”) і кажемо чи він є пенсіонером.

import { argv } from "process";
import readline from "readline";

// Getting arguments
const paramsListString = argv.slice(2).join("&");
const args = new URLSearchParams(paramsListString);

// Getting pension age
const pensionAge = parseInt(args.get("--pension"));

// Creating interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asking user
rl.question("Введіть ваш вік: ", (answer) => {
  parseInt(answer) >= pensionAge
    ? console.log("Ви пенсіонер")
    : console.log("Ви не пенсіонер");

  rl.close();
});
