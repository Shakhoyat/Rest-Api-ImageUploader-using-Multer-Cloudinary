import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

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

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
app.post("/profile", upload.single("avatar"), function (req, res) {});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
