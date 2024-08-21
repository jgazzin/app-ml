const db = require('../db/data_base')

const obtenerHito = (req, res) =>{
    const sql ='SELECT * FROM hitos';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const createHito = (req, res) =>{
    const { hito, fecha, tema } = req.body;
    const sql = 'INSERT INTO hitos (hito, fecha, tema) VALUE (?,?,?)';

    db.query(sql, [hito, fecha, tema], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Hito guardado',
            hitoID: result.insertId
        })
    })
}

const borrarHito = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM hitos WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Hito eliminado'
        })
    })
}


module.exports ={
    obtenerHito,
    createHito,
    borrarHito
}