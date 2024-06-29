const express = require('express')
const router_redes = express.Router()
const redes_controller = require('../controller/redes_controller')

router_redes.get("/", redes_controller.obtenerPubli)
router_redes.get("/:tema", redes_controller.obtenerPubliTema)
router_redes.post("/", redes_controller.createPubli)
//router_redes.put("/:id", redes_controller.modificarPubli)
router_redes.delete("/:id", redes_controller.borrarPubli)

module.exports = router_redes;