const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 60000 // Aumenta el timeout a 60 segundos
    }
    );
    console.log("Te has conectado con éxito a la BBDD");
  } catch (error) {
    console.log("No te has conectado a la BBDD");
  }
}

module.exports = { connectDB }