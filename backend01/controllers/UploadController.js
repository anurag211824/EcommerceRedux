import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
//streamifier is used to convert a file buffer (binary data) into a readable stream that can be piped
// into another stream (Cloudinary upload stream in this case).
import dotenv from "dotenv"
dotenv.config()

//Cloudinary Configuration
// This configures Cloudinary with credentials from environment 
// variables so you can interact with your Cloudinary account.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log("Cloudinary config:", cloudinary.config());

// This defines an asynchronous Express.js controller function named imageUploader, 
// intended to handle image upload requests.
const imageUploader = async (req, res) => {
    console.log("Upload route hit");
    console.log("Received file:", req.file);

  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    // Function to handle the stream upload to cloudinary
    // Defines a helper function streamUpload that uploads a file buffer to Cloudinary. 
    // It returns a promise so it can be await-ed.

    // It creates an upload stream to Cloudinary.
    // If the upload is successful, it resolves the promise with the result (which contains secure_url, public_id, etc.).
    // If there’s an error, it rejects the promise.
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        // Use streamifier to convert file buffer to a stream
        // Converts the file buffer (req.file.buffer) into a stream using streamifier 
        // and pipes it into Cloudinary's upload stream.
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    //Calls the streamUpload function with the uploaded file's buffer and waits for Cloudinary's response.
    const result = await streamUpload(req.file.buffer);
    //If successful, it returns the uploaded image’s secure Cloudinary URL as a JSON response.
    res.json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Servver Error" });
  }
};

export { imageUploader };
