const express       = require('express');
const port          = 80;
const indexRoute    = require('./src/routes/index');
const noteRoute     = require('./src/routes/notes');
const cors          = require('cors');
const dotenv        = require('dotenv');
dotenv.config();

//Initiliazations
const app        = express();
require ('./src/db.js'); //<--MongoDb

//Settings (Configuraciones del servidor de express)
app.set('port', port);

//Middle
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

//Routes
app.use(indexRoute);
app.use(noteRoute);

//Server is listening
app.listen(app.get('port'), () => {
    console.log('running app in port:', app.get('port'));
});