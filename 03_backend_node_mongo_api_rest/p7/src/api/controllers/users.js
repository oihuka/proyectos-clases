const { generateSign } = require("../../config/jwt");
const User = require("../models/users");
const bcrypt = require("bcrypt");

const buscarUsuario = async (userName) => {
  const user = await User.findOne({ userName });
  return user;
}

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
}

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
    return res.status(400).json(error);
  }
}

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
    return res.status(400).json(error);
  }
}

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
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    return res.status(200).json(userDeleted);
  } catch (error) {
    let err_msg = "Error en la solicitud 'deleteUser'. Error: " + error;
    console.error(err_msg);
    return res.status(400).json(err_msg);
  }
}

module.exports = { getUsers, register, login, putUser, deleteUser }