const express = require('express')
const app = express()
const path = require('path')
let port = 3000;
const mediosRuta = require('./routes/medios');
const redesRutas = require('./routes/redes');

app.use(express.json())
app.use('/medios', mediosRuta)
app.use('/redes', redesRutas)

// home
app.use(express.static(path.join(__dirname,'public')));

app.listen(port, () => {
    console.log(`Servidor express desde puerto ${port}`);
})