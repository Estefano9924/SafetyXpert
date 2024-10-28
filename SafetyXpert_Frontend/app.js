// app.js
const express = require('express');
require('dotenv').config();
const { engine } = require('express-handlebars');
const path = require('path');
const rutas = require('./router')

const app = express();

// Configurar la carpeta de vistas
app.set('views', path.join(__dirname, 'views'));

//Congfigurar ruta estatica para mercurio
app.use(express.static('public'));

// Configurar Handlebars como motor de plantillas
app.engine('.hbs', engine({
  defaultLayout: 'main',                    // Nombre del layout principal
  layoutsDir: path.join(app.get('views'), 'layouts'), // Carpeta de layouts
  partialsDir: path.join(app.get('views'), 'partials'), // Carpeta de partials
  extname: '.hbs'                           // Extensión de las plantillas
}));

 // Establece .hbs como la extensión de las plantillas
app.set('view engine', '.hbs');

 // Establece .hbs como la extensión de las plantillas
app.use('/', rutas);

module.exports = app;