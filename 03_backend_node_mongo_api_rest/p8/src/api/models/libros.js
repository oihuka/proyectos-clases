const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  fecha_publicacion: { type: Number, required: true },
  imagen: { type: String, required: true },
  verified: { type: Boolean, required: true, default: false }
}, {
  timestamps: true,
  collection: "libros"
});

const Libro = mongoose.model("libros", libroSchema, "libros");
module.exports = Libro;