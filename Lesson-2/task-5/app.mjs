// Задача 5. Створити додаток з історією. У файлі json зберігаємо усі роути та кількість відвідувань.
// У налаштуваннях settings.json зберігати який роут треба використати для перегляду історії та назву файлу де зберігається історія

import { writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import historyData from "./history.json" assert { type: "json" };
import settingsData from "./settings.json" assert { type: "json" };

const server = createServer((req, res) => {
  const url = req.url;

  if (url === settingsData.historyRoute) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(historyData));
  }

  try {
    if (historyData[url]) {
      historyData[url] += 1;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("history updated\n");
    } else {
      historyData[url] = 1;
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Route added to history\n");
    }

    writeFile(settingsData.historyFilePath, JSON.stringify(historyData));
  } catch (error) {
    console.log(error);
  }

  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Hello World!\n");
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
