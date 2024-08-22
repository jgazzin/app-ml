const express = require('express')
const app = express()
const path = require('path')
let port = 3000;
const prensaRuta = require('./routes/prensa');
const msgRuta = require('./routes/mensajes');
const proyectosRuta = require('./routes/proyectos');
const temasRuta = require('./routes/temas');
const areasRuta = require('./routes/areas');
const infoRuta = require('./routes/info');
const hitosRuta = require('./routes/hitos');

app.use(express.json())
app.use('/proyectos', proyectosRuta)
app.use('/temas', temasRuta)
app.use('/areas', areasRuta)
app.use('/info', infoRuta)
app.use('/prensa', prensaRuta)
app.use('/hitos', hitosRuta)
app.use('/mensajes', msgRuta)

// home
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log(`Servidor express desde puerto ${port}`);
})