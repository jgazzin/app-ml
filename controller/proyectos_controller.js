const db = require('../db/data_base')

const obtenerProyectos = (req, res) =>{
    const sql ='SELECT * FROM proyectos';

    db.query(sql, (err, result) =>{
        if(err) throw err;
        res.json(result);
    })
}

// const obtenerPubliTema = (req,res)=>{
//     const {tema} = req.params;
//     const sql = 'SELECT * FROM publicaciones WHERE id = ?';

//     db.query(sql, [tema], (err, result)=>{
//         if(err) throw err;
//         res.json(result);
//     })
// }

const createProyecto = (req, res) =>{
    const { numero, fecha, detalle, areas, tema, estado, enlace } = req.body;
    const sql = 'INSERT INTO proyectos (numero, fecha, detalle, areas, tema, estado, enlace) VALUE (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [numero, fecha, detalle, areas, tema, estado, enlace], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Proyecto guardado',
            notaID: result.insertId
        })
    })
}

const borrarProyecto = (req, res)=>{
    const {id} =req.params;
    const sql = 'DELETE FROM proyectos WHERE id = ?';

    db.query(sql, [id], (err, result)=>{
        if(err) throw err;
        res.json({
            mensaje: 'Proyecto eliminado'
        })
    })
}

const modificarProyecto = (req, res) => {
    const {id} = req.params;
    const { numero, fecha, detalle, area, tema, estado, enlace } = req.body;
    const sql = 'UPDATE proyectos SET nombre = ?, fecha = ?, detalle = ?, area = ?, tema = ?, estado = ?, enlace = ? WHERE id = ?';

    db.query(sql, [numero, fecha, detalle, area, tema, estado, enlace, id], (err, result) => {
        if(err) {
            throw err;
        }
        res.json({
            mensaje: 'Proyecto modificado con éxito'
        });
    })

};

module.exports ={
    obtenerProyectos,
    createProyecto,
    borrarProyecto,
    modificarProyecto
}