const mongoose = require('mongoose');

const RutaSchema = new mongoose.Schema({
  name:{type: String, require: true, unique: true,},
  origin: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
  },
  destination: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
  },
  distanceKm: { 
    type: Number, 
    required: true,
  },
  estimateDurationMin: { 
    type: Number, 
    required: true 
  },
  registreDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  status: {
    type: String,
    enum:['active', 'inative'],
    required: true
  }
});

module.exports = mongoose.model('Rutas', RutaSchema);