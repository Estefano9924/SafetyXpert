const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const { registrarUsuario, iniciarSesion } = require('../controllers/autenticacionControlador');

// Crear un usuario
router.post('/', registrarUsuario);

// iniciar Sesion
router. post('/login', iniciarSesion)

//Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
      const usuarios = await Usuario.find({ status: 'active' });
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un conductor por ID
  router.get('/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findById(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'usuario no encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un conductor
  router.put('/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!usuario) return res.status(404).json({ error: 'usuario no encontrado' });
      res.json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Eliminar un conductor
  router.delete('/:id', async (req, res) => {
    try {
      const usuario = await Usuario.findByIdAndDelete(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'usuario no encontrado' });
      res.json({ message: 'usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  //Login con encriptado y jwt
  router.post('/login' ,async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar al usuario por email
        const usuario = await User.findOne({ email });
        if (!usuario) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }

        // Verificar la contraseña
        const esValida = await usuario.comparePassword(password);
        if (!esValida) {
            return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
        }

        // Generar el token JWT
        const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({
            mensaje: 'Inicio de sesión exitoso',
            token,
            usuario: {
                id: usuario._id,
                email: usuario.email
            }
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
});

  

module.exports = router;