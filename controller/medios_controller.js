const db = require('../db/data_base')

const obtenerNotas = (req, res) =>{
    const sql ='SELECT * FROM medios';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const obtenerNotasTema = (req,res)=>{
    const {tema} = req.params;
    const sql = 'SELECT * FROM medios WHERE id = ?';

    db.query(sql, [tema], (err, result)=>{
        if(err) throw err;
        res.json(result);
    })
}

const createNota = (req, res) =>{
    const {fecha, medio, tema, enlace} = req.body;
    const sql = 'INSERT INTO medios (fecha, medio, tema, enlace) VALUE (?,?,?,?)';

    db.query(sql, [fecha, medio, tema, enlace], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Nota guardada',
            notaID: result.insertId
        })
    })
}

const borrarNota = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM medios WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Nota eliminada'
        })
    })
}

module.exports ={
    obtenerNotas,
    obtenerNotasTema,
    createNota,
    borrarNota
}