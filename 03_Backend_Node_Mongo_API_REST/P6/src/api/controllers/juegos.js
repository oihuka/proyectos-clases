const Juego = require("../models/juegos");

const getJuegos = async (req, res, next) => {
  try {
    const juegos = await Juego.find();
    return res.status(200).json(juegos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getJuegos'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getJuegoById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juego = await Juego.findById(id);
    return res.status(200).json(juego);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getJuegoById'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getJuegosByCategory = async (req, res, next) => {
  try {
    const { categoria } = req.params;
    const juegos = await Juego.find({ categoria: categoria });
    return res.status(200).json(juegos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getJuegosByCategory'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getJuegosByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params;
    const juegos = await Juego.find({ precio: { $lt: precio } });
    return res.status(200).json(juegos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getJuegosByPrice'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const postJuego = async (req, res, next) => {
  try {
    const newJuego = new Juego(req.body);
    const juegoSaved = await newJuego.save();
    return res.status(201).json(juegoSaved);
  } catch (error) {
    let err_msg = "Error en la solicitud 'postJuego'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const putJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoUpdated = await Juego.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(juegoUpdated);
  } catch (error) {
    let err_msg = "Error en la solicitud 'putJuego'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
}

const deleteJuego = async (req, res, next) => {
  try {
    const { id } = req.params;
    const juegoDeleted = await Juego.findByIdAndDelete(id);
    return res.status(200).json(juegoDeleted);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteJuego'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

module.exports = {
  getJuegos,
  getJuegosByCategory,
  getJuegoById,
  getJuegosByPrice,
  postJuego,
  putJuego,
  deleteJuego
}