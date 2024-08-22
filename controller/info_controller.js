const db = require('../db/data_base')

const obtenerInfo = (req, res) =>{
    const sql ='SELECT * FROM info';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const editarInfo = (req, res) => {

    const { sesiones, bloque } = req.body;
    const sql = 'UPDATE info SET sesiones = ?, bloque = ? WHERE id = 1';

    db.query(sql, [sesiones, bloque], (err, result) => {
        if(err) {
            throw err;
        }
        res.json({
            mensaje: 'Información editada con éxito'
        });
    })

};

const createInfo = (req, res) =>{
    const { sesiones, bloque } = req.body;
    const sql = 'INSERT INTO info (sesiones, bloque) VALUE (?,?)';

    db.query(sql, [sesiones, bloque], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'registro 1 info guardada',
            notaID: result.insertId
        })
    })
}

module.exports ={
    obtenerInfo,
    editarInfo,
    createInfo
}