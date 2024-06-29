const db = require('../db/data_base')

const obtenerPubli = (req, res) =>{
    const sql ='SELECT * FROM publicaciones';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const obtenerPubliTema = (req,res)=>{
    const {tema} = req.params;
    const sql = 'SELECT * FROM publicaciones WHERE id = ?';

    db.query(sql, [tema], (err, result)=>{
        if(err) throw err;
        res.json(result);
    })
}

const createPubli = (req, res) =>{
    const {fecha, medio, tema, enlace} = req.body;
    const sql = 'INSERT INTO publicaciones (fecha, medio, tema, enlace) VALUE (?,?,?,?)';

    db.query(sql, [fecha, medio, tema, enlace], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Publicacion guardada',
            notaID: result.insertId
        })
    })
}

const borrarPubli = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM publicaciones WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Publicación eliminada'
        })
    })
}

module.exports ={
    obtenerPubli,
    obtenerPubliTema,
    createPubli,
    borrarPubli
}