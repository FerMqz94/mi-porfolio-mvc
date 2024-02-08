const express = require('express');
const app = express();
const path = require('path');
const port = 3030;

// RUTAS
const otherRutes = require('./routes/other.routes')

// CONFUGURACIONES
app.use(express.static('public'))

// ENRUTADORES
app.use('/', otherRutes)
app.use('/sobre-nosotros', otherRutes)


app.listen(3000, ()=>{
    console.log(`Servidor funcionando en el puerto ${port}`);
});