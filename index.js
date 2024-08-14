const express = require('express')
const app = express()
const path = require('path')
let port = 3000;
const mediosRuta = require('./routes/medios');
const redesRuta = require('./routes/redes');
const proyectosRuta = require('./routes/proyectos');
const temasRuta = require('./routes/temas');
const areasRuta = require('./routes/areas');
const infoRuta = require('./routes/info');

app.use(express.json())
app.use('/proyectos', proyectosRuta)
app.use('/temas', temasRuta)
app.use('/areas', areasRuta)
app.use('/info', infoRuta)
// app.use('/medios', mediosRuta)
// app.use('/redes', redesRuta)

// home
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log(`Servidor express desde puerto ${port}`);
})