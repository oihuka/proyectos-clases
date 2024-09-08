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
    imagen: "https://m.media-amazon.com/images/I/91Ovw42c9QS._SY466_.jpg",
    verified: false
  },
  {
    // Dostoyevski
    titulo: "Pobres gentes",
    genero: "novela",
    fecha_publicacion: 1846,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Poor_Folk-1.png",
    verified: false
  },
  {
    titulo: "Los demonios",
    genero: "novela",
    fecha_publicacion: 1869,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/79/The_first_edition_of_Dostoevsky%27s_novel_Demons_Petersburg_1873.JPG",
    verified: true
  },
  {
    // Lovecraft
    titulo: "El modelo de Pickman",
    genero: "cuento",
    fecha_publicacion: 1927,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Pickman%27s_Model.jpg",
    verified: true
  },
  {
    titulo: "Memoria",
    genero: "microrrelato",
    fecha_publicacion: 1919,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/11/At_the_Mountains_of_Madness.jpg",
    verified: true
  },
];

const semillaAutores = [
  {
    nombre: "Isabel Allende",
    nacionalidad: "Chilena/Estadounidense",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Isabel_Allende_Frankfurter_Buchmesse_2015_%28cropped%29.JPG"
  },
  {
    nombre: "Fiódor Dostoyevski",
    nacionalidad: "Rusa",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg"
  },
  {
    nombre: "H. P. Lovecraft",
    nacionalidad: "Estadounidense",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/10/H._P._Lovecraft%2C_June_1934.jpg",
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
