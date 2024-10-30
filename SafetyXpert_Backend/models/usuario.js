const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UsuarioSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { paternalSurname: { type: String, required: true }, maternalSurname: { type: String, required: true } },
  typeDoc: { type: String, enum: ['DNI', 'CC', 'CE', 'Pasaporte'], required: true },
  idDoc: { type: String, required: true },
  genero: { type: String, enum: ['Masculino', 'Femenino'], required: true },
  birthplace: { country: { type: String, required: true }, state: { type: String, required: true }, city: { type: String, required: true } },
  birthDate: { type: Date, required: true },
  residenceAddress: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  phoneNumber: { type: String, required: true, match: /^\d{7,15}$/ },
  rol: { type: String, enum: ['administrador', 'conductor', 'soporte'], },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  creationDate: { type: Date, default: Date.now },
  image: { type: String, required: false, default: 'C:\D\pc\Música\SafetyXpert\SafetyXpert_Frontend\public\IMG\perfil.png' }
  
});

// Índices para mejorar las búsquedas
UsuarioSchema.index({ email: 1 });
UsuarioSchema.index({ username: 1 });
UsuarioSchema.index({ surname: 1 });


UsuarioSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Método para comparar contraseñas
UsuarioSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Usuario = mongoose.model("Usuario", UsuarioSchema);
module.exports = Usuario;
