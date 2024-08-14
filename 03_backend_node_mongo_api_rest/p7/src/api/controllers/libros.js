const Libro = require("../models/libros");

const getLibros = async (req, res, next) => {
  try {
    const libros = await Libro.find({ verified: true });
    return res.status(200).json(libros);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getLibros'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getLibrosAdmin = async (req, res, next) => {
  try {
    const libros = await Libro.find({ verified: false });
    return res.status(200).json(libros);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getLibrosAdmin'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getLibroById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findById(id);
    return res.status(200).json(libro);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getLibroById'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getLibrosByGenre = async (req, res, next) => {
  try {
    const { genero } = req.params;
    const libros = await Libro.find({ genero: genero });
    return res.status(200).json(libros);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getLibrosByGenre'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const getLibrosByPubDate = async (req, res, next) => {
  try {
    const { fecha_publicacion } = req.params;
    const libros = await Libro.find({ fecha_publicacion: { $lte: fecha_publicacion } });
    return res.status(200).json(libros);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getLibrosByPrice'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const postLibro = async (req, res, next) => {
  try {
    const newLibro = new Libro(req.body);

    // queremos que el libro si lo está creando un usuario normal el campo verified esté obligatoriamente en false
    // cuando lo crea un admin está en true
    if (req.user.rol === "admin") {
      newLibro.verified = true;
    } else {
      newLibro.verified = false;
    }

    const libroSaved = await newLibro.save();
    return res.status(201).json(libroSaved);
  } catch (error) {
    let err_msg = "Error en la solicitud 'postLibro'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

const putLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libroUpdated = await Libro.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(libroUpdated);
  } catch (error) {
    let err_msg = "Error en la solicitud 'putLibro'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
}

const deleteLibro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const libroDeleted = await Libro.findByIdAndDelete(id);
    return res.status(200).json(libroDeleted);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteLibro'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

module.exports = {
  getLibros,
  getLibrosAdmin,
  getLibrosByGenre,
  getLibroById,
  getLibrosByPubDate,
  postLibro,
  putLibro,
  deleteLibro
}