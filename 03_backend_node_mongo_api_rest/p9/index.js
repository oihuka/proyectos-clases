require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/config/db");
const shelvingRouter = require("./src/api/routes/shelving");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/shelvings", shelvingRouter);

app.use("*", (req, res) => {
  return res.status(404).json("Route not found")
})

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000 😎");
})