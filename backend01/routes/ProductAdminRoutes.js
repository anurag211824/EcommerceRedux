import express from "express"
import { protect,adminAuth } from "../middleware/AuthMiddleware.js"
import { getAllProductsAdmin } from "../controllers/ProductAdminController.js"


const router = express.Router()

// @route GET api/admin/products
// @description Get all products (Admin only)
// @access Private/Admin
router.get("/",protect,adminAuth,getAllProductsAdmin)

export default router