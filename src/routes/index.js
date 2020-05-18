const express = require('express');
const router = express.Router();

//Para crear rutas del servidor
router.get('/', (req, res) => {
  res.send({status: 'Im alive'});
});

module.exports = router;
