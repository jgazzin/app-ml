const express = require('express')
const router_temas = express.Router()
const temas_controller = require('../controller/temas_controller')

router_temas.get("/", temas_controller.obtenerTema)
router_temas.post("/", temas_controller.createTema)
router_temas.delete("/:id", temas_controller.borrarTema)

module.exports = router_temas;