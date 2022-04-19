const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');


const router = require('./network/routes');

db('mongodb+srv://db_user_telegram:FZkeG1G30xJfBiJl@cluster0.a99ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

var app = express();
app.use(bodyParser.json())
router(app);





app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');