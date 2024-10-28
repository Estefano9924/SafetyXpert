const mongoose = require('mongoose');

 const VehiculoSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    anio: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    numeroPlaca: {
        type: String,
        required: true,
        unique: true // Placas deben ser únicas
    },
    tipo: { // Tipo de vehículo (Ej: 'sedán', 'SUV', 'camión', etc.)
        type: String,
        enum: ['sedán', 'SUV', 'camión', 'pickup', 'minivan'], // Tipos permitidos
        required: true
    },
    propietarioId: { // Referencia al usuario o conductor propietario
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario', // Nombre del modelo de usuario
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },
    estado: { // Estado del vehículo (Ej: 'activo', 'inactivo')
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    }
});

// Exportar el modelo
module.exports = mongoose.model('Vehiculo', VehiculoSchema);