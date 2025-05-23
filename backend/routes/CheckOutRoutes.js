import express from "express"
import { protect } from "../middleware/AuthMiddleware.js";
import { createCheckout, finalizeCheckoutToOrder, updateCheckoutToPaid } from "../controllers/CheckOutController.js";


const router = express.Router();

// @route POST /api/checkout
// @description Create a new checkout session
// access Private
router.post("/",protect,createCheckout)

// @route PUT /api/checkout/:id/pay
// @description Update checkout to mark as paid after a sucessfull payment
// @access Private
router.put("/:id/pay",protect,updateCheckoutToPaid)

// @route POST /api/checkout/:id/finalize
// description finalize checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect, finalizeCheckoutToOrder);

export default router;