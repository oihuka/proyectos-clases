const Autor = require("../models/autores");

const getAutores = async (req, res, next) => {
  try {
    const autores = await Autor.find().populate("libros");
    return res.status(200).json(autores);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getAutores'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getAutorById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autor = await Autor.findById(id).populate("libros");
    return res.status(200).json(autor);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getAutorById'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const postAutor = async (req, res, next) => {
  try {
    const newAutor = new Autor(req.body);
    const autorSaved = await newAutor.save();
    return res.status(201).json(autorSaved);
  } catch (error) {
    let err_msg = "Error en la solicitud 'postAutor'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const putAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldAutor = await Autor.findById(id);
    const newAutor = new Autor(req.body);
    newAutor._id = id;

    const librosUnicos = Array.from(new Set([...oldAutor.libros, ...req.body.libros]));
    newAutor.libros = librosUnicos;

    const autorUpdated = await Autor.findByIdAndUpdate(id, newAutor, {
      new: true,
    });
    return res.status(200).json(autorUpdated);
  } catch (error) {
    let err_msg = "Error en la solicitud 'putAutor'.";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

const deleteAutor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const autorDeleted = await Autor.findByIdAndDelete(id);
    return res.status(200).json(autorDeleted);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteAutor'";
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

module.exports = {
  getAutores,
  getAutorById,
  postAutor,
  putAutor,
  deleteAutor
}