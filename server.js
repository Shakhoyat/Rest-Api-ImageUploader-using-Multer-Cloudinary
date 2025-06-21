import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
