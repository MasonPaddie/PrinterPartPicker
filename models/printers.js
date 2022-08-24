const mongoose = require('mongoose');

printers = [
];

const printersSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    basePrinter: {type: String},
    motionSystem: {type: String, required: true},
    bed: {type: String, required: true},
    psu: {type: String, required: true},
    motherboard: {type: String, required: true},
    extruder: {type: String, required: true},
    hotEnd: {type: String, required: true},
    nozzle: {type: String, required: true},
    lcd: {type: String},
    filaRunout: {type: Boolean, required: true},
    img: {type: String, unique: true},
    price: {type: Number, min: 0},
}, { timestamps: true })

const Printers = mongoose.model('Printers',printersSchema)

module.exports = Printers
module.exports = printers