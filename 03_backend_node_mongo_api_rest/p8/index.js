require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const cors = require("cors");
const mainRouter = require("./src/api/routes/main");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

connectDB();

app.use("/api/v1", mainRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor levantado en: http://localhost:${port} 😎`);
});