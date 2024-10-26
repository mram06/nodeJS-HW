import { Router } from "express";
const router = Router();
import MainController from "../controllers/mainController.mjs";

router.get("/", MainController.index);

export default router;
