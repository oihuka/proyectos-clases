const Plataforma = require("../models/plataformas");

const getPlataformas = async (req, res, next) => {
  try {
    const plataformas = await Plataforma.find().populate("juegos");
    return res.status(200).json(plataformas);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getPlataformas'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getPlataformaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataforma = await Plataforma.findById(id).populate("juegos");
    return res.status(200).json(plataforma);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getPlataformaById'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const postPlataforma = async (req, res, next) => {
  try {
    const newPlataforma = new Plataforma(req.body);
    const plataformaSaved = await newPlataforma.save();
    return res.status(201).json(plataformaSaved);
  } catch (error) {
    let err_msg = "Error en la solicitud 'postPlataforma'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const putPlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldPlataforma = await Plataforma.findById(id);
    const newPlataforma = new Plataforma(req.body);
    newPlataforma._id = id;

    const juegosUnicos = Array.from(new Set([...oldPlataforma.juegos, ...req.body.juegos]));
    newPlataforma.juegos = juegosUnicos;

    const plataformaUpdated = await Plataforma.findByIdAndUpdate(id, newPlataforma, {
      new: true,
    });
    return res.status(200).json(plataformaUpdated);
  } catch (error) {
    let err_msg = "Error en la solicitud 'putPlataforma'.";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

const deletePlataforma = async (req, res, next) => {
  try {
    const { id } = req.params;
    const plataformaDeleted = await Plataforma.findByIdAndDelete(id);
    return res.status(200).json(plataformaDeleted);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deletePlataforma'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

module.exports = {
  getPlataformas,
  getPlataformaById,
  postPlataforma,
  putPlataforma,
  deletePlataforma
}