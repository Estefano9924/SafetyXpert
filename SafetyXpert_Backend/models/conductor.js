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


const VistaConductorSchema = new mongoose.Schema({}, { collection: 'vistaConductores' });


// Exportar el modelo
module.exports = {
  Conductor: mongoose.model('Conductor', ConductorSchema),
  VistaConductor: mongoose.model('VistaConductor', VistaConductorSchema)
};