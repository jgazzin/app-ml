const db = require('../db/data_base')

const obtenerArea = (req, res) =>{
    const sql ='SELECT * FROM areas';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const createArea = (req, res) =>{
    const { area } = req.body;
    const sql = 'INSERT INTO areas (area) VALUE (?)';

    db.query(sql, [area], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Area guardada',
            notaID: result.insertId
        })
    })
}

const borrarArea = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM areas WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Area eliminada'
        })
    })
}


module.exports ={
    obtenerArea,
    createArea,
    borrarArea
}