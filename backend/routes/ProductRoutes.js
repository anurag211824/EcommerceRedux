import express from "express";
import { adminAuth, protect } from "../middleware/AuthMiddleware.js";
import {
  createNewProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  getSimilarProducts,
  getBestSeller,
  getNewArrivals
} from "../controllers/ProductController.js";

const router = express.Router();

// @route POST /api/products
// @description Create a new Product in DB
// @access Private/Admin
router.post("/", protect, adminAuth, createNewProduct);

// @route PUT /api/products/:id
// @description Update an existing product Id
// @access Private/Admin
router.put("/:id", protect, adminAuth, updateProduct);

// @route DELETE /api/products/:id
// @desciption Delete a product by ID from the DB
// @access Private/Admin
router.delete("/:id", protect, adminAuth, deleteProduct);

// @route GET /api/products
// @description Get all products with optional query filters
// access Public
router.get("/", getAllProducts);

// @route GET /api/products/best-seller
// @description Retrieve the products with highest ratings
// @access Public
router.get("/best-seller",getBestSeller)

// @route GET /api/products/new-arrivals
// @description Retrieve latest 8 products - Creation date
// @access Public
router.get("/new-arrivals",getNewArrivals)

// @route GET /api/products/:id
// @description Get a single product by Id from Data base
// @access Public
router.get("/:id", getSingleProduct);

// @route GET /api/products/similar/:id
// @description Retrieve similar products based on the current products's gender and category
// @access Public
router.get("/similar/:id", getSimilarProducts);


export default router;
