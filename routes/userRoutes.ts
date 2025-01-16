import express from "express";
import { viewGroceries, placeOrder } from "../src/controllers/user.controller";

const router = express.Router();

router.get("/groceries", viewGroceries);
router.post("/order", placeOrder);

export default router;
