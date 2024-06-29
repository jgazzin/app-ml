const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

connection.connect( (err) => {
    if(err){
        console.log('Error de conección BD: ', err);
        return;
    }
    console.log('Conectado a BD ok');

    connection.query('CREATE DATABASE IF NOT EXISTS registro_ml', (err, result) => {
        if(err){
            console.log(`Error creando BD registro_ml`);
            return;
        }
        console.log('BD asegurada');

        connection.changeUser({database: 'registro_ml'}, (err) =>{
            if(err) {
                console.error('Error al cambiar a la BD ', err)
            }

            const createTableMediosQuery = `
            CREATE TABLE IF NOT EXISTS medios(
            id INT AUTO_INCREMENT PRIMARY KEY,
            fecha VARCHAR(10) NOT NULL,
            medio VARCHAR(40) NOT NULL,
            tema VARCHAR(20) NOT NULL,
            enlace VARCHAR(100) NOT NULL
            );`;

            connection.query(createTableMediosQuery, (err, result) => {
                if(err) {
                    console.log('Error creando tabla medios', err);
                    return;
                }
            console.log('Tabla medios asegurada');
            })

            const createTablePublisQuery = `
            CREATE TABLE IF NOT EXISTS publicaciones(
            id INT AUTO_INCREMENT PRIMARY KEY,
            fecha VARCHAR(10) NOT NULL,
            medio VARCHAR(40) NOT NULL,
            tema VARCHAR(20) NOT NULL,
            enlace VARCHAR(300) NOT NULL
            );`;

            connection.query(createTablePublisQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla publicaciones', err);
                }
                console.log('tabla publicaciones asegurada');
            })

        })

    })
})

module.exports = connection;
