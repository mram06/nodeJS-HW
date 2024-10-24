import { Router } from "express";
const router = Router();
import fs from "fs";

router.get("/", (req, res) => {
  fs.readFile("./db/productsData.json", (err, data) => {
    if (err) return res.status(500).send("An error ocurred while reading file");
    res.render("productsList", {
      title: "Products",
      products: JSON.parse(data),
    });
  });
});
router.get("/addproduct", (req, res) => {
  res.render("addProduct", { title: "Додати товар" });
});

export default router;
