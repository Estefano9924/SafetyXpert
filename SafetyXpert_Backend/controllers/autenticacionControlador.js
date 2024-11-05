// controllers/authController.js
const Usuario = require('../models/usuario');

const registrarUsuario = async (req, res) => {
    const {name, surname, typeDoc, idDoc, genero, birthplace, birthDate, residenceAddress, email, phoneNumber, rol, username, password, status}= req.body;
    

    try {
        // Verificar si el usuario ya existe
        const usuarioExistente = await Usuario.findOne({username});
        if (usuarioExistente) {
            return res.status(400).json({ mensaje: 'El usuario ya existe' });
        } 

        // Crear un nuevo usuario
        const nuevoUsuario = new Usuario({name, surname, typeDoc, idDoc, genero, birthplace, birthDate, residenceAddress, email, phoneNumber, rol, username, password, status});
        await nuevoUsuario.save();

        res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
};

const iniciarSesion = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar al usuario por email
        const usuario = await Usuario.findOne({ username });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
            
        }

        // Comparar la contraseña
        const esValida = await usuario.comparePassword(password)
        if (!esValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Aquí puedes generar un token si estás usando JWT, por ejemplo.
        res.json({ mensaje: 'Inicio de sesión exitoso', usuario });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
};

module.exports = { registrarUsuario, iniciarSesion };
