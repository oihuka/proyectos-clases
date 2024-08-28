const { isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/file");
const { getAutores, getAutorById, postAutor, putAutor, deleteAutor } = require("../controllers/autores");

const autoresRouter = require("express").Router();

autoresRouter.get("/:id", getAutorById);
autoresRouter.get("/", getAutores);
autoresRouter.post("/", [isAdmin], upload.single("imagen"), postAutor);
autoresRouter.put("/:id", [isAdmin], upload.single("imagen"), putAutor);
autoresRouter.delete("/:id", [isAdmin], deleteAutor);

module.exports = autoresRouter;