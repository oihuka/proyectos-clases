const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Conectado con éxito a la BD 😄");
  } catch (error) {
    console.error("Algo ha salido mal 😵");
  }
};

module.exports = { connectDB };
