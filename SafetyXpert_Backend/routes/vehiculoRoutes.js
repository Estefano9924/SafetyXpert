const express = require('express');
const router = express.Router();
const Vehiculo = require('../models/vehiculo');

// Crear un vehiculo
router.post('/', async (req, res) => {
  try {
    const nuevoVehiculo = new Vehiculo(req.body);
    const vehiculo = await nuevoVehiculo.save();
    res.status(201).json(vehiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Obtener todos los vehiculos
router.get('/', async (req, res) => {
    try {
      const vehiculos = await Vehiculo.find();
      res.json(vehiculos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Obtener un vehiculo por ID
  router.get('/:id', async (req, res) => {
    try {
      const vehiculo = await Vehiculo.findById(req.params.id);
      if (!vehiculo) return res.status(404).json({ error: 'vehiculo no encontrado' });
      res.json(vehiculo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Actualizar un vehiculo
  router.put('/:id', async (req, res) => {
    try {
      const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!vehiculo) return res.status(404).json({ error: 'vehiculo no encontrado' });
      res.json(vehiculo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Eliminar un vehiculo
  router.delete('/:id', async (req, res) => {
    try {
      const usuario = await Vehiculo.findByIdAndDelete(req.params.id);
      if (!usuario) return res.status(404).json({ error: 'vehiculo no encontrado' });
      res.json({ message: 'vehiculo eliminado' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;