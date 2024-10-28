const express = require('express');
const router = express.Router();

// Ruta para login
router.get('/', (req, res) => {
    res.render('login', { title: 'login', layout: 'forLogin' });
  });
  
  // Ruta para la página principal
  router.get('/Dashboard', (req, res) => {
    res.render('home', { title: 'Principal' });
  });
  
  // Ruta para usuarios
  router.get('/Usuarios', (req, res) => {
    res.render('usuario', { title: 'Usuarios' });
  });

  // Ruta para Reportes
  router.get('/Reportes', (req, res) => {
    res.render('reporte', { title: 'Reportes' });
  });

   // Ruta para usuarios
   router.get('/Calendario', (req, res) => {
    res.render('calendario', { title: 'Calendario' });
  });


  module.exports = router;