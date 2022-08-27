const mongoose = require('mongoose');
var parts = require('./parts.js')

printers = [{ name: "Modified Sovol SV01", img:"https://i.all3dp.com/wp-content/uploads/2019/10/25142021/hero_sovol.jpg", basePrinter:"", motionSystem: parts[0].name, bed: parts[1].name, psu: parts[2].name, motherboard: parts[3].name, extruder: parts[4].name, hotEnd: parts[5].name, nozzle: parts[6].name, lcd: parts[7].name, filaRunout: false, blSensor: true, price: parts[0].price + parts[1].price + parts[2].price + parts[3].price + parts[4].price + parts[5].price + parts[6].price + parts[7].price + 45}
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
    blSensor: {type: Boolean, required: true},
    img: {type: String, unique: true},
    price: {type: Number, min: 0},
}, { timestamps: true })

const Printers = mongoose.model('Printers',printersSchema)

module.exports = Printers
module.exports = printers