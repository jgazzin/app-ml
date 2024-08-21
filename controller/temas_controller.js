const db = require('../db/data_base')

const obtenerTema = (req, res) =>{
    const sql ='SELECT * FROM temas';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

const createTema = (req, res) =>{
    const { tema } = req.body;
    const sql = 'INSERT INTO temas (tema) VALUE (?)';

    db.query(sql, [tema], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Tema guardada',
            temaID: result.insertId
        })
    })
}

const borrarTema = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM temas WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Tema eliminada'
        })
    })
}


module.exports ={
    obtenerTema,
    createTema,
    borrarTema
}