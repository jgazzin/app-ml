const express = require('express')
const router_medios = express.Router()
const medios_controller = require('../controller/medios_controller')

router_medios.get("/", medios_controller.obtenerNotas)
router_medios.get("/:tema", medios_controller.obtenerNotasTema)
router_medios.post("/", medios_controller.createNota)
//router_medios.put("/:id", medios_controller.modificarNota)
router_medios.delete("/:id", medios_controller.borrarNota)

module.exports = router_medios;