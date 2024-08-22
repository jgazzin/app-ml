require('dotenv').config()

const mysql = require('mysql2')
const connection = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: 'root'
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
})

connection.connect( (err) => {
    if(err){
        console.log('Error de conección BD: ', err);
        return;
    }
    console.log('Conectado a BD ok');

    connection.query('CREATE DATABASE IF NOT EXISTS jgdisenio_ml', (err, result) => {
        if(err){
            console.log(`Error creando BD registro_ml`);
            return;
        }
        console.log('BD asegurada');

        connection.changeUser({database: 'jgdisenio_ml desde alwaysdata'}, (err) =>{
            if(err) {
                console.error('Error al cambiar a la BD ', err)
            }

            // --- PUBLICACIONES EN MEDIOS
            const createTableMediosQuery = `
            CREATE TABLE IF NOT EXISTS prensa(
            id INT AUTO_INCREMENT PRIMARY KEY,
            fecha DATE NOT NULL,
            medio VARCHAR(40) NOT NULL,
            titulo VARCHAR(255) NOT NULL,
            tema VARCHAR(30) NOT NULL,
            enlace TEXT NOT NULL
            );`;

            connection.query(createTableMediosQuery, (err, result) => {
                if(err) {
                    console.log('Error creando tabla prensa', err);
                    return;
                }
            console.log('Tabla medios asegurada');
            })

            // ----- PUBLICACIONES REDES
            // const createTablePublisQuery = `
            // CREATE TABLE IF NOT EXISTS publicaciones(
            // id INT AUTO_INCREMENT PRIMARY KEY,
            // fecha DATE NOT NULL,
            // medio VARCHAR(40) NOT NULL,
            // tema VARCHAR(30) NOT NULL,
            // enlace TEXT NOT NULL
            // );`;

            // connection.query(createTablePublisQuery, (err, result) => {
            //     if(err) {
            //         console.log('error creando tabla publicaciones', err);
            //     }
            //     console.log('tabla publicaciones asegurada');
            // })

            //------ PROYECTOS 
            const createTableProyectosQuery = `
            CREATE TABLE IF NOT EXISTS proyectos(
            id INT AUTO_INCREMENT PRIMARY KEY,
            numero VARCHAR(12) NOT NULL,
            fecha DATE NOT NULL,
            detalle TEXT NOT NULL,
            areas VARCHAR(40) NOT NULL,
            tema VARCHAR(30) NOT NULL,
            estado VARCHAR(20) NOT NULL,
            enlace TEXT NOT NULL
            );`;

            connection.query(createTableProyectosQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla proyectos', err);
                }
                console.log('tabla proyectos asegurada');
            })

            //--- TEMAS 
            const createTableTemasQuery = `
            CREATE TABLE IF NOT EXISTS temas(
            id INT AUTO_INCREMENT PRIMARY KEY,
            tema VARCHAR(30) NOT NULL);
            `;

            connection.query(createTableTemasQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla temas', err);
                    
                }
                console.log('tabla temas asegurada');
                
            })

            //---- AREAS
            const createTableAreasQuery = `
            CREATE TABLE IF NOT EXISTS areas(
            id INT AUTO_INCREMENT PRIMARY KEY,
            area VARCHAR(30) NOT NULL);
            `;

            connection.query(createTableAreasQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla areas', err);
                    
                }
                console.log('tabla areas asegurada');
                
            })

            //---- INFO
            const createTableInfoQuery = `
            CREATE TABLE IF NOT EXISTS info(
            id INT AUTO_INCREMENT PRIMARY KEY,
            sesiones INT,
            bloque INT);
            `;

            connection.query(createTableInfoQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla info', err);
                    
                }
                console.log('tabla info asegurada'); 
            })

            //---- HITOS
            const createTableHitosQuery = `
            CREATE TABLE IF NOT EXISTS hitos(
            id INT AUTO_INCREMENT PRIMARY KEY,
            hito TEXT NOT NULL,
            fecha DATE NOT NULL,
            tema VARCHAR(30) NOT NULL);
            `;

            connection.query(createTableHitosQuery, (err, result) => {
                if(err) {
                    console.log('error creando tabla hitos', err);
                }
                console.log('tabla hitos asegurada');
            })

             //---- MENSAJES
             const createTableMensajesQuery = `
             CREATE TABLE IF NOT EXISTS mensajes(
             id INT AUTO_INCREMENT PRIMARY KEY,
             asunto VARCHAR(30) NOT NULL,
             fecha DATE NOT NULL,
             mensaje TEXT NOT NULL,
             nombre VARCHAR(40) NOT NULL,
             email VARCHAR(255) NOT NULL,
             ciudad VARCHAR(50) NOT NULL);
             `;
 
             connection.query(createTableMensajesQuery, (err, result) => {
                 if(err) {
                     console.log('error creando tabla mensajes', err);
                 }
                 console.log('tabla mensajes asegurada');
             })

        })

    })
})

module.exports = connection;
