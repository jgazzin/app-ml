const express = require('express')
const router_proyectos = express.Router()
const proyectos_controller = require('../controller/proyectos_controller')

router_proyectos.get("/", proyectos_controller.obtenerProyectos)
// router_proyectos.get("/:tema", proyectos_controller.obtenerProyectoTema)
router_proyectos.post("/", proyectos_controller.createProyecto)
router_proyectos.put("/:id", proyectos_controller.modificarProyecto)
router_proyectos.delete("/:id", proyectos_controller.borrarProyecto)

module.exports = router_proyectos;