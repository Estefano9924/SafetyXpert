const express = require('express');
const router = express.Router();
const Ruta = require('../models/rutas');


// Crear una ruta
router.post('/', async (req, res) => {
  try {
    const nuevaRuta = new Ruta(req.body);
    const ruta = await nuevaRuta.save();
    res.status(201).json(ruta);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Obtener todas las rutas Activas
router.get('/', async (req, res) => {
    try {
      const rutas = await Ruta.find({status:'active'});
      res.json(rutas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un Ruta por ID
  router.get('/:id', async (req, res) => {
    try {
      const ruta = await Ruta.findById(req.params.id);
      if (!ruta) return res.status(404).json({ error: 'ruta no encontrada' });
      res.json(ruta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar una ruta
  router.put('/:id', async (req, res) => {
    try {
      const ruta = await Ruta.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!ruta) return res.status(404).json({ error: 'ruta no encontrada' });
      res.json(ruta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Eliminar una ruta
  router.delete('/:id', async (req, res) => {
    try {
      const ruta = await Ruta.findByIdAndDelete(req.params.id);
      if (!ruta) return res.status(404).json({ error: 'ruta no encontrada' });
      res.json({ message: 'ruta eliminada' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  

module.exports = router;