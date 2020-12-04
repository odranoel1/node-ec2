const app       = require('./app');
const dotenv    = require('dotenv');

dotenv.config();
// require('./config/db.js'); //<--MongoDb

const init = () => {
    //Settings (Configuraciones del servidor de express)
    app.set('port', process.env.PORT);

    //Server is listening
    app.listen(app.get('port'), () => {
        console.log('running app in port:', app.get('port'));
    });
}

init();