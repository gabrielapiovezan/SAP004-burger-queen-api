import { Router } from "express";
import OrderController from "../controllers/OrderController";

const router = Router();
router.get("/", OrderController.all);
router.post("/", OrderController.add);
router.get("/:id", OrderController.getById);
router.put("/:id", OrderController.all);
router.delete("/:id", OrderController.all);
router.get("/:id/items", OrderController.getItemsById);
router.post("/:id/items", OrderController.createItem);
export default router;
