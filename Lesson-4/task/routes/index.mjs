import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Головна сторінка",
  });
});

export default router;
