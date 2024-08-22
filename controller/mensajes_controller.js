const db = require('../db/data_base')

const obtenerMensaje = (req, res) =>{
    const sql ='SELECT * FROM mensajes';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const createMensaje = (req, res) =>{
    const {nombre, email, ciudad, mensaje, asunto, fecha} = req.body;
    const sql = 'INSERT INTO mensajes (nombre, email, ciudad, mensaje, asunto, fecha) VALUE (?,?,?,?,?,?)';

    db.query(sql, [nombre, email, ciudad, mensaje, asunto, fecha], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Mensaje guardada',
            notaID: result.insertId
        })
    })
}

const borrarMensaje = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM mensajes WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Mensaje eliminado'
        })
    })
}

module.exports ={
    obtenerMensaje,
    createMensaje,
    borrarMensaje
}