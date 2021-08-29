const { Schema, model } = require('mongoose');

// Collection sensors en MongoDb
const sensorSchema = new Schema ({
    id_sensor: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true 
});

/*  MODELO PARA PRUEBA
{
    "id_sensor": "6345683",
    "brand": "Marca IOT",
    "model": "Sensor temp 2021",
    "author": "Ale",
    "temperature": "17.8",
    "description": "Temperatura ambiente a la mañana",
    "created_at": "2021-08-28"
}
*/

module.exports = model('Sensor', sensorSchema);
