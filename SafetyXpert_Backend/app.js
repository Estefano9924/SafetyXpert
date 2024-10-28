const express = require('express');
const connectDB = require('./config/db');
const conductorRoutes = require('./routes/conductorRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const rutasRoutes = require('./routes/rutasRoutes');
const vehiculosRoutes = require('./routes/vehiculoRoutes');
const consultasRoutes = require('./routes/consultasRoutes');
require('dotenv').config();
const Cors = require('cors');

const app = express(); // Crear la instancia de Express
app.use(Cors());

// Conectar a la base de datos
connectDB();
const cors = require('cors');
// Middleware
app.use(express.json());


//rutas
app.use('/api/conductores', conductorRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rutas', rutasRoutes);
app.use('/api/vehiculos', vehiculosRoutes);
app.use('/api/consultas', consultasRoutes);


// Exportar la instancia de Express
module.exports = app;