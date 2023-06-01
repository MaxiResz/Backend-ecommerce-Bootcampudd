const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

// Registro de usuario
exports.register = async (req, res) => {
    // Código para registrar usuario
}

// Inicio de sesión de usuario
exports.login = async (req, res) => {
    // Código para iniciar sesión del usuario
}

// Obtener información del usuario
exports.getMe = async (req, res) => {
    // Código para obtener información del usuario
}
