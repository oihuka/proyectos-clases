const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const Libro = require("../models/libros");
const bcrypt = require("bcrypt");

const buscarUsuario = async (userName) => {
  const user = await User.findOne({ userName });
  return user;
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().populate("favoritos");
    return res.status(200).json(users);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getUsers'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
};

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: "user"
    });

    const duplicateUser = await buscarUsuario(req.body.userName);

    if (duplicateUser) {
      return res.status(400).json("El nombre de usuario introducido ya existe");
    }

    const userSaved = await newUser.save();
    return res.status(201).json(userSaved);
  } catch (error) {
    let err_msg = "Error en la solicitud 'register'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await buscarUsuario(req.body.userName);

    if (!user) {
      return res.status(400).json("Usuario no existente");
    }

    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id);
      return res.status(200).json({ user, token });
    } else {
      return res.status(400).json("Contraseña incorrecta");
    }
  } catch (error) {
    let err_msg = "Error en la solicitud 'login'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
};

const putUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userUpdated = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(userUpdated);
  } catch (error) {
    let err_msg = "Error en la solicitud 'putUser'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const requestingUser = req.userName;

    if (requestingUser.rol === "admin" || requestingUser._id === id) {
      const userDeleted = await User.findByIdAndDelete(id);

      if (userDeleted) {
        return res
          .status(200)
          .json({ message: "Usuario eliminado correctamente", userDeleted });
      } else {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
    } else {
      return res
        .status(403)
        .json({ message: "No tienes permisos para realizar esta acción" });
    }
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteUser'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

const getFavoritos = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("favoritos");
    return res.status(200).json(user.favoritos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'getFavoritos'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

const addFavorito = async (req, res) => {
  try {
    const { id } = req.body;
    const libro = await Libro.findById(id);

    if (!libro) {
      return res.status(404).json("Libro no encontrado");
    }

    const user = await User.findById(req.user._id);
    if (!user.favoritos.includes(id)) {
      user.favoritos.push(id);
      await user.save();
    }

    return res.status(200).json(user.favoritos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'addFavorito'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

const deleteFavorito = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(req.user._id);

    user.favoritos.pull(id);
    await user.save();

    return res.status(200).json(user.favoritos);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteFavorito'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
};

module.exports = {
  getUsers,
  register,
  login,
  putUser,
  deleteUser,
  getFavoritos,
  addFavorito,
  deleteFavorito,
};
