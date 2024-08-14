const { isAdmin, isAuth } = require("../../middlewares/auth");
const { getUsers, register, login, putUser, deleteUser } = require("../controllers/users");

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAdmin], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id", [isAdmin], putUser);
usersRoutes.delete("/delete/:id", [isAuth], deleteUser);

module.exports = usersRoutes;