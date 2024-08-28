// seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const { connectDB } = require("../config/db");
const Libro = require("../api/models/libros");
const Autor = require("../api/models/autores");

const semillaLibros = [
  {
    // Allende
    titulo: "La Ciudad de las Bestias",
    genero: "novela",
    fecha_publicacion: 2002,
    verified: false
  },
  {
    // Dostoyevski
    titulo: "Pobres gentes",
    genero: "novela",
    fecha_publicacion: 1846,
    verified: false
  },
  {
    titulo: "Los demonios",
    genero: "novela",
    fecha_publicacion: 1869,
    verified: true
  },
  {
    // Lovecraft
    titulo: "El modelo de Pickman",
    genero: "cuento",
    fecha_publicacion: 1927,
    verified: true
  },
  {
    titulo: "Memoria",
    genero: "microrrelato",
    fecha_publicacion: 1919,
    verified: true
  },
];

const semillaAutores = [
  {
    nombre: "Isabel Allende",
    nacionalidad: "Chilena/Estadounidense",
  },
  {
    nombre: "Fiódor Dostoyevski",
    nacionalidad: "Rusa"
  },
  {
    nombre: "H. P. Lovecraft",
    nacionalidad: "Estadounidense"
  },
];

const poblarDB = async () => {
  try {
    await connectDB();

    // Limpiar la colección antes de insertar nuevos datos
    await Libro.deleteMany({});
    await Libro.insertMany(semillaLibros);

    // Limpiar la colección antes de insertar nuevos datos
    await Autor.deleteMany({});
    await Autor.insertMany(semillaAutores);

    console.log("Datos insertados correctamente 🤘");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error al insertar datos:", error);
    mongoose.connection.close();
  }
};

poblarDB();
