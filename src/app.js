const express       = require('express');
const cors          = require('cors');

const indexRoute    = require('./controllers/index');
const noteRoute     = require('./controllers/notes');

//Initiliazations
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes
app.use(indexRoute);
app.use(noteRoute);

module.exports = app;