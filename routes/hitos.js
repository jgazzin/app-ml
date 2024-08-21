const express = require('express')
const router_hitos = express.Router()
const hitos_controller = require('../controller/hitos_controller')

router_hitos.get("/", hitos_controller.obtenerHito)
router_hitos.post("/", hitos_controller.createHito)
router_hitos.delete("/:id", hitos_controller.borrarHito)

module.exports = router_hitos;