import express from "express"
import multer from "multer"
import { imageUploader } from "../controllers/UploadController.js"



const router= express.Router()

//Multer setUp using memory storage
//Sets up Multer to store uploaded files in memory (RAM) as buffers rather than writing them to disk.
// This is useful when you want to immediately send the file to another service (like Cloudinary) without saving locally.This is useful when you want to immediately send the file to 
// another service (like Cloudinary) without saving locally.
const storage = multer.memoryStorage(); 
const upload = multer({storage})
 
router.post("/",upload.single('image'),imageUploader)
export default router;
