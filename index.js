require('dotenv').config('.env'); // Variables de entorno
const express = require('express');
const path = require('path');

const app = express(); // Inicio del servidor

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))

//Routing files
const routerUser = require('./routes/User.js');

app.use(routerUser);

app.listen(process.env.APPPORT || 3000, () => {
    console.log('*** SERVIDOR CORRIENDO ***');
    console.log(`http://localhost/${process.env.APPPORT || 3000}`);
});