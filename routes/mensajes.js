const express = require('express')
const router_msg = express.Router()
const msg_controller = require('../controller/mensajes_controller')

router_msg.get("/", msg_controller.obtenerMensaje)
router_msg.post("/", msg_controller.createMensaje)
router_msg.delete("/:id", msg_controller.borrarMensaje)

module.exports = router_msg;