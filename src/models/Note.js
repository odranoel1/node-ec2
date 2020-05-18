const mongoose = require('mongoose'); //Lo requerimos para crear esquemas de datos*
const { Schema } = mongoose;

//Hay que guardar este esquema de mongoose en una constante, para
//decirle a mongodb como va lucir nuestros datos, aun no se ha creado el modelo
//Para definir las propiedades de nuestra instancia (En este caso de las notas)
const NoteSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  date: {type: Date, default: Date.now}
})

//Module.exports <-- Para utilizar el modelo de datos, en otra parte de la aplicacion
module.exports = mongoose.model('Note', NoteSchema);