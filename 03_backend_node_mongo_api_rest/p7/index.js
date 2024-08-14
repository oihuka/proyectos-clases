require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const librosRouter = require("./src/api/routes/libros");
const autoresRouter = require("./src/api/routes/autores");
const cors = require("cors");
const usersRouter = require("./src/api/routes/users");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/v1/autores", autoresRouter);
app.use("/api/v1/libros", librosRouter);
app.use("/api/v1/users", usersRouter);

app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found");
});

app.listen(3000, () => {
  console.log("Servidor levantado en: http://localhost:3000 😎");
});