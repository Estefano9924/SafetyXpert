const mongoose = require('mongoose');

const rutasHistoricoSchema = new mongoose.Schema({
 
  cliente: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Cliente
    ref: 'Cliente',
    required: true
  },
  conductor: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Conductor
    ref: 'Conductor',
    required: true
  },
  vehiculo: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo Conductor
    ref: 'vehiculo',
    required: true
  },
  status: {
    type: String,
    enum:['Pendiente', 'Pausadas','Pendiente'],
    required: true
  },
  startDate: {
    type: Date,
    required: true // Fecha de inicio de la ruta
  },
  endDate: {
    type: Date,
    required: false // Fecha de finalización de la ruta
  }
});

module.exports = mongoose.model('RutasHistorico', rutasHistoricoSchema);