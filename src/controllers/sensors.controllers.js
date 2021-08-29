const sensorsController = { };

const SensorModel = require('../models/Sensor');

// Petición GET 
sensorsController.getSensors = async (req,res) => {
    const sensors = await SensorModel.find();
    res.json(sensors);
};

// Petioción CREATE
sensorsController.createSensor = async (req,res) => {
    const { id_sensor, brand, model, author, temperature, description, created_at } = req.body;
    const newSensor = new SensorModel({
        id_sensor,
        brand,
        model,
        author,
        temperature,
        description,
        created_at
    });
    console.log(newSensor);
    await newSensor.save();
    res.json({message: 'POST - Request'});
};

// Petición GET/:id
sensorsController.getSensor = async (req,res) => {
    const sensor = await SensorModel.findById(req.params.id);
    res.json(sensor);
};

// Petición UPDATE/:id
sensorsController.updateSensor = async (req,res) => {
    const { id_sensor, brand, model, author, temperature, description, created_at } = req.body;
    await SensorModel.findOneAndUpdate( {_id: req.params.id}, {
        id_sensor,
        brand,
        model,
        author,
        temperature,
        description,
        created_at
    });
    res.json({message:'PUT - Sensor updated'});
};

// Petición DELETE/:id
sensorsController.deleteSensor = async (req,res) => {
    const sensor = await SensorModel.findByIdAndDelete(req.params.id)
    res.json(sensor);
};


module.exports = sensorsController;