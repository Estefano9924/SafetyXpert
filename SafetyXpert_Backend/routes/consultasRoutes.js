const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const Rutas = require('../models/rutas');
const RutaHistorico = require('../models/rutasProceso');



// conteo de usuarios activos
router.get('/countUsuariosActivos', async (req, res) => {
    try {
        const usuariosActivos = await Usuario.countDocuments({ status: "active" });
        res.json(usuariosActivos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// conteo de rutas activas
router.get('/countRutasActivas', async (req, res) => {
    try {
        const rutasActivas = await Rutas.countDocuments({ status: "active" });
        res.json(rutasActivas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// conteo de conductores activos
router.get('/countConductoresActivos', async (req, res) => {
    try {
        const usuariosActivos = await Usuario.countDocuments({ status: "active", rol: 'conductor' });
        res.json(usuariosActivos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// conteo de usuarios Registrados
router.get('/usuariosRegistrados', async (req, res) => {
    try {
        const usuariosActivos = await Usuario.countDocuments({});
        res.json(usuariosActivos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//reporte de todos los usuarios registrados
router.get('/usuariosActivos', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//reporte de conductores activos
router.get('/conductoresActivos', async (req, res) => {
    try {
        const usuarios = await Usuario.find({ status: 'active', rol: 'conductor' });
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Counter de rutas activas
router.get('/countRutasActivas', async (req, res) => {
    try {
        const rutas = await Rutas.countDocuments({ status: 'active' });
        res.json(rutas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

//Counter de rutas activas
router.get('/countRutasTotales', async (req, res) => {
    try {
        const rutas = await Rutas.countDocuments({});
        res.json(rutas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;