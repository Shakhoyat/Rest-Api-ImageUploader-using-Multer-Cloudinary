import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

const app = express();
const PORT = 3000;
//configure multer for file uploads
cloudinary.config({
  cloud_name: "dbnvwi17e",
  api_key: "493372257182395",
  api_secret: "8ceUyApY0Wzs9XuRO_1gr1bMUI4",
});
//connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shakoyatsujon:3W8IdD5g6kON8AJW@cluster0.0p8evwy.mongodb.net/",
    { dbName: "Nodejs101db" }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

//rendering ejs template
app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

/**
 * Configures Multer storage to save uploaded files to the local filesystem.
 * Files are stored in the './public/uploads' directory with a unique filename
 * consisting of the field name, the current timestamp, and the original file extension.
 */
const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

// Handles POST requests to '/profile' endpoint, processes a single file upload with the field name 'avatar'
app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file.path;
  // Upload the file to Cloudinary
  cloudinary.uploader.upload(file, (error, result) => {
    if (error) {
      console.error("Cloudinary upload error:", error);
      return res.status(500).send("Error uploading file to Cloudinary");
    }
    // Send the URL of the uploaded file back to the client
    res.render("index.ejs", { url: result.secure_url });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
