const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.registerUser = async (userData) => {
  const existingUser = await User.findOne({ email: userData.email });
  if (existingUser) {
    throw new Error('Usuário já existe');
  }

  const newUser = new User(userData);
  await newUser.save();
  return newUser;
};

exports.loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    throw new Error('Email ou senha inválidos');
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

exports.getUser = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  return user;
};

exports.getAllUsers = async () => {
  const users = await User.find();
  return users;
};

exports.updateUser = async (id, updatedData) => {
  const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });
  if (!updatedUser) {
    throw new Error('Usuário não encontrado');
  }

  return updatedUser;
};

exports.deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
};
