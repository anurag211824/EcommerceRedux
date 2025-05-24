import express from "express"
import { protect,adminAuth } from "../middleware/AuthMiddleware.js";
import { addUser, deleteUser, getAllUers, updateUser } from "../controllers/AdminControllers.js";
const router = express.Router();

// @route GET /api/admin/users
// @description Get all the users
// @access Private admin only
router.get("/",protect,adminAuth,getAllUers);

// @route POST /api/admin/users
// @description Add a new users (admin only)
// @access Private only
router.post("/",protect,adminAuth,addUser)

// @route PUT /api/admin/users/:id
// @description Update the user info - Name,email,and role
// access Private/Admin
router.put("/:id",protect,adminAuth,updateUser)

// @route Delete /api/admin/users/:id
// @description Delete a user from DB
// @access Private
router.delete("/:id",protect,adminAuth,deleteUser)

export default router;