import express from "express";
import { protect } from "../middleware/AuthMiddleware.js";
import {
  addToCart,
  getCartProducts,
  mergeGuestCartIntoUserCart,
  removeProductFromCart,
  updateCart,
} from "../controllers/CartController.js";

const router = express.Router();

// @route POST /api/cart
// @description Add a product to the cart for a guest or a logged in user
// @access Public
router.post("/", addToCart);

// @route PUT /api/cart
// @desciption Update product quantity in the cart for a guest or a logged in user
// @access Public
router.put("/", updateCart);

// @route DELETE /api/cart
// @desciption Remove a product from the cart
// access Public
router.delete("/", removeProductFromCart);

// @route GET /api/cart
// @desc  Get logged-in user's cart
// @access Public
router.get("/", getCartProducts);

// @route POST /api/cart/merge
// @description Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, mergeGuestCartIntoUserCart);

export default router;
