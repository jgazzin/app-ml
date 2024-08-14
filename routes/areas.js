const express = require('express')
const router_areas = express.Router()
const areas_controller = require('../controller/areas_controller')

router_areas.get("/", areas_controller.obtenerArea)
router_areas.post("/", areas_controller.createArea)
router_areas.delete("/:id", areas_controller.borrarArea)

module.exports = router_areas;