const { isAuth, isAdmin } = require("../../middlewares/auth");
const { getLibros, getLibrosAdmin, getLibroById, getLibrosByGenre, getLibrosByPubDate, postLibro, putLibro, deleteLibro } = require("../controllers/libros");

const librosRouter = require("express").Router();

librosRouter.get("/not-verified", [isAdmin], getLibrosAdmin);
librosRouter.get("/fecha_publicacion/:fecha_publicacion", getLibrosByPubDate);
librosRouter.get("/genero/:genero", getLibrosByGenre);
librosRouter.get("/:id", getLibroById);
librosRouter.get("/", getLibros);
librosRouter.post("/", [isAuth], postLibro);
librosRouter.put("/:id", [isAdmin], putLibro);
librosRouter.delete("/:id", [isAdmin], deleteLibro);

module.exports = librosRouter;