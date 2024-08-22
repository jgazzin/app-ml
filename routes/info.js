const express = require('express')
const router_info = express.Router()
const info_controller = require('../controller/info_controller')

router_info.get("/", info_controller.obtenerInfo)
router_info.put("/1", info_controller.editarInfo)
router_info.post("/", info_controller.createInfo)

module.exports = router_info;