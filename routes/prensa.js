const express = require('express')
const router_prensa = express.Router()
const prensa_controller = require('../controller/prensa_controller')

router_prensa.get("/", prensa_controller.obtenerNotas)
router_prensa.post("/", prensa_controller.createNota)
router_prensa.delete("/:id", prensa_controller.borrarNota)

module.exports = router_prensa;