import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import { getMyOrders, getOrderById } from "../controllers/OrderController.js";
const router = express.Router();

// @route GET /api/order/my-orders
// @description Get logged-in user's order
// @access Private
router.get("/my-orders",protect,getMyOrders)

// @route GET /api/orders/:id
// @description Get order details by id
// @access Private
router.get("/:id",protect,getOrderById)

export default router;