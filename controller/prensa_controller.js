const db = require('../db/data_base')

const obtenerNotas = (req, res) =>{
    const sql ='SELECT * FROM prensa';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}


const createNota = (req, res) =>{
    const {fecha, medio, titulo, tema, enlace} = req.body;
    const sql = 'INSERT INTO prensa (fecha, medio, titulo, tema, enlace) VALUE (?,?,?,?,?)';

    db.query(sql, [fecha, medio, titulo, tema, enlace], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Nota guardada',
            notaID: result.insertId
        })
    })
}

const borrarNota = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM prensa WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Nota eliminada'
        })
    })
}

module.exports ={
    obtenerNotas,
    createNota,
    borrarNota
}