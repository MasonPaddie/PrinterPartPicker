const mongoose = require('mongoose');

parts = [ 
    {name: "Sovol SV01 Motion System",type: "motionSystem", linearRails: true, zMotors: 2, zdimension: 300, img: "", price: 50},
    {name: "Sovol Flexible Bed", type:"bed", xdimension: 280, ydimension: 240, heatedBed: true, material: "glass", img: "", price: 30},
    {name: "Sovol SV01 PSU", type: "psu", watts: 100, volts: 12, img: "", price: 30},
    {name: "BIGTREETECH mini e3", type: "motherboard", bits: 32, img: "", price: 50},
    {name: "Titan", type: "extruder", directDrive: true, bowden: false, diameter: 1.75, img: "", price: 30},
    {name: "E3D V6", type: "hotEnd", img: "", price: 50},
    {name: "Standard 0.4 Nozzle", type: "nozzle", diameter: 0.4, material: "brass", img: "", price: 5},
    {name: "TFT35", type: "lcd", img:"", price: 50}
];

const partsSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsMotionSystemSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    linearRails: {type: Boolean},
    zMotors: {type: Number},
    zdimension: {type: Number, required: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsBedSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    xdimension: {type: Number, required: true},
    ydimension: {type: Number, required: true},
    heatedBed: {type: Boolean, required: true},
    material: {type: String, required: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsPsuSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    watts: {type: Number},
    volts: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsMotherboardSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    bits: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsExtruderSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    directDrive: {type: Boolean},
    bowden: {type: Boolean},
    diameter: {type: Number},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsHotEndSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsNozzleSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    diameter: {type: Number},
    material: {type: String},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsLcdSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const Parts = mongoose.model('Parts',partsSchema)

module.exports = Parts  

const PartsMotionSystem = mongoose.model('PartsMotionSystem',partsMotionSystemSchema)

module.exports = PartsMotionSystem 

const PartsBed = mongoose.model('PartsBed',partsBedSchema)

module.exports = PartsBed 

const PartsPsu = mongoose.model('PartsPsu',partsPsuSchema)

module.exports = PartsPsu 

const PartsMotherboard = mongoose.model('PartsMotherboard',partsMotherboardSchema)

module.exports = PartsMotherboard 

const PartsExtruder = mongoose.model('PartsExtruder',partsExtruderSchema)

module.exports = PartsExtruder 

const PartsHotEnd = mongoose.model('PartsHotEnd',partsHotEndSchema)

module.exports = PartsHotEnd 

const PartsNozzle = mongoose.model('PartsNozzle',partsNozzleSchema)

module.exports = PartsNozzle 

const PartsLcd = mongoose.model('PartsLcd',partsLcdSchema)

module.exports = PartsLcd 

module.exports = parts;

