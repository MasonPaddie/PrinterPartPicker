const mongoose = require('mongoose');

parts = [
];



const partsSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    linearRails: {type: Boolean},
    zMotors: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const Parts = mongoose.model('Parts',partsSchema)

module.exports = Parts  
module.exports = parts;

const partsMotionSystemSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    linearRails: {type: Boolean},
    zMotors: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsMotionSystem = mongoose.model('PartsMotionSystem',partsMotionSystemSchema)

module.exports = PartsMotionSystem 

const partsBedSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    size: {type: Boolean, required: true},
    heated: {type: Boolean, required: true},
    material: {type: String, required: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsBed = mongoose.model('PartsBed',partsBedSchema)

module.exports = PartsBed 

const partsPsuSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    watts: {type: Number},
    volts: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsPsu = mongoose.model('PartsPsu',partsPsuSchema)

module.exports = PartsPsu 

const partsMotherboardSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    bits: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsMotherboard = mongoose.model('PartsMotherboard',partsMotherboardSchema)

module.exports = PartsMotherboard 

const partsExtruderSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    directDrive: {type: Boolean},
    bowden: {type: Boolean},
    diameter: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsExtruder = mongoose.model('PartsExtruder',partsExtruderSchema)

module.exports = PartsExtruder 

const partsHotEndSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsHotEnd = mongoose.model('PartsHotEnd',partsHotEndSchema)

module.exports = PartsHotEnd 

const partsNozzleSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    diameter: {type: Number},
    material: {type: String},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsNozzle = mongoose.model('PartsNozzle',partsNozzleSchema)

module.exports = PartsNozzle 

const partsLcdSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const PartsLcd = mongoose.model('PartsLcd',partsLcdSchema)

module.exports = PartsLcd 