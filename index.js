const express   = require('express');
const app        = express();
const port      = 3000;

app.get('/status', (req, res) => res.send({status: 'Im alive'}));

app.listen(port, () => console.log(`running app in port:${port}`));