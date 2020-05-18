const express = require('express');
const router = express.Router();

//Tomamos el modelo de datos, de la carpeta models
//Para poder llamar sus metodos (save, update, delete)
const Note = require('../models/Note'); 1

const getNotes = async (req, res) => {
  //Consultar en la base de datos y ordenar por fecha de manera descendiente
  const notes = await Note.find();
  return res.json({
    status: 1,
    result: { notes }
  });
}

const createNote = async (req, res) => {

  const { title, description } = req.body;
  const newNote = new Note({ title, description });
  await newNote.save(); // <--Va tomar un tiempo de ejecucion, cuando termine, corre con lo que este debajo

  // Send User Info and Token
  return res.json({
    status: 1,
    result: { newNote }
  });

}

//Para mostrar los datos que estan guardados en la db
router.get('/notes', getNotes);
router.post('/notes', createNote);

module.exports = router;
