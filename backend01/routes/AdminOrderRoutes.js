import express from "express";
import { protect, adminAuth } from "../middleware/AuthMiddleware.js";
import {
    deleteOrderById,
  getAdminOrders,
  updateOrderById,
} from "../controllers/AdminOrderController.js";

const router = express.Router();

// @route GET /api/admin/orders
// @description Get all orders (admin only)
// @access Private/Admin
router.get("/", protect, adminAuth, getAdminOrders);

// @route PUT /api/admin/orders/:id
// @description Update orders status
// @access Private admin
router.put("/:id", protect, adminAuth, updateOrderById);


// @route DELETE /api/admin/orders/:id
// @description Delete an order
// @access Private/Admin
router.delete("/:id",protect,adminAuth,deleteOrderById)

export default router;
