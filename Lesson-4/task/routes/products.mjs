import { Router } from "express";
const router = Router();
import ProductsController from "../controllers/productsController.mjs";

router.get("/", ProductsController.products);
router.get("/addproduct", ProductsController.createForm);
router.get("/:id", ProductsController.productInfo);
router.post("/", ProductsController.addProduct);

export default router;
