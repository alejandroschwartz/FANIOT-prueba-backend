const { Router } = require('express');
const router = Router();

// Importo un objeto con los metodos de los sensores de controllers
const { getSensors, createSensor, getSensor, updateSensor, deleteSensor } = 
    require('../controllers/sensors.controllers');

router.route('/')
    .get(getSensors)
    .post(createSensor);

router.route('/:id')
    .get(getSensor)
    .put(updateSensor)
    .delete(deleteSensor); 

module.exports = router;