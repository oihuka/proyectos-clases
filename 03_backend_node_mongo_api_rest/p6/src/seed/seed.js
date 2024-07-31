// seed.js
require("dotenv").config();
const mongoose = require('mongoose');
const { connectDB } = require('../config/db');
const Juego = require('../api/models/juegos');
const Plataforma = require('../api/models/plataformas');

const semillaJuegos = [
  {
    nombre: "Super Mario Bros Wonder",
    imagen: "https://estacionmars.pe/wp-content/uploads/2023/08/supder-mario-bros-wonder.png",
    precio: 30,
    categoria: "plataformas"
  },
  {
    nombre: "The Last of Us",
    imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/last-us-2579129.jpg?tf=3840x",
    precio: 50,
    categoria: "aventuras"
  },
  {
    nombre: "Bloodborne",
    imagen: "https://cdn.shoplightspeed.com/shops/653177/files/39959403/cmon-bloodborne-forbidden-woods-expansion.jpg",
    precio: 40,
    categoria: "aventuras"
  }
];

const semillaPlataformas = [
  {
    nombre: "Play Station 5",
    imagen: "https://cdn2.iconfinder.com/data/icons/logos-brands-5/2017/playstation-5-seeklogo.com-5-512.png"
  },
  {
    nombre: "Nintendo Switch",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/2048px-Nintendo_Switch_Logo.svg.png"
  }
];

const poblarDB = async () => {
  try {
    await connectDB();

    // Limpiar la colección antes de insertar nuevos datos
    await Juego.deleteMany({});
    await Juego.insertMany(semillaJuegos);

    // Limpiar la colección antes de insertar nuevos datos
    await Plataforma.deleteMany({});
    await Plataforma.insertMany(semillaPlataformas);

    console.log('Datos insertados correctamente 🤘');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error al insertar datos:', error);
    mongoose.connection.close();
  }
};

poblarDB();
