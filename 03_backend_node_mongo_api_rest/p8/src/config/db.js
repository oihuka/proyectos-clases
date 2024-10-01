const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("😄 Conectado con éxito a la BD");
  } catch (error) {
    console.error("😵 Error al conectar a la BD: ", error.message);
    console.error("URL de conexión: ", process.env.DB_URL);
    process.exit(1);
  }
};

module.exports = { connectDB };
