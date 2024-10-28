const mongoose = require('mongoose');

const ConductorSchema = new mongoose.Schema({
  usuarioId: { // Referencia al usuario
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario', // Nombre del modelo de usuario
    required: true
  },
  licencia: { 
    type: String, 
    required: true, 
    unique: true 
  },
  
fechaUltimaVezActivo: { 
    type: Date 
  },
});

// Exportar el modelo
module.exports = mongoose.model('Conductor', ConductorSchema);
