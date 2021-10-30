const mongoose = require("mongoose");


const userSchema = mongoose.Schema({

    tipoDocumento: String,
    Documento: Number,
    Nombre: String,
    Apellido: String,
    Direccion: String,
    Correo: String,
    Telefono: Number,
    Celular: String,
    Sitioweb: String,
    Descipcion: String
})

module.exports = mongoose.model('Empleados',userSchema);