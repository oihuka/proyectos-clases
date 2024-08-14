const { isAdmin } = require("../../middlewares/auth");
const { getAutores, getAutorById, postAutor, putAutor, deleteAutor } = require("../controllers/autores");

const autoresRouter = require("express").Router();

autoresRouter.get("/:id", getAutorById);
autoresRouter.get("/", getAutores);
autoresRouter.post("/", [isAdmin], postAutor);
autoresRouter.put("/:id", [isAdmin], putAutor);
autoresRouter.delete("/:id", [isAdmin], deleteAutor);

module.exports = autoresRouter;