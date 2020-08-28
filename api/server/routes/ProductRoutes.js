import { Router } from "express";
import ProductController from "../controllers/ProductController";

const router = Router();
router.get("/", ProductController.all);
router.post("/", ProductController.add);
router.get("/:id", ProductController.all);
router.put("/:id", ProductController.all);
router.delete("/:id", ProductController.all);
export default router;
