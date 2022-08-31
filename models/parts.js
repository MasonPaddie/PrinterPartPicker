const mongoose = require('mongoose');

parts = [ 
    {name: "Sovol SV01 Motion System",type: "motionSystem", motionType:"Cartesian", linearRails: true, zMotors: 2, zdimension: 300, img: "https://www.gabrian.com/wp-content/uploads/2022/01/t-slot-extrusions-with-accessories-500.jpeg", price: 50},
    {name: "Sovol Flexible Bed", type:"bed", xdimension: 280, ydimension: 240, heatedBed: true, material: "glass", img: "https://cdn.shopify.com/s/files/1/0051/5548/7832/products/4_1000x.jpg?v=1643525062", price: 30},
    {name: "Meanwell LRS-350-24", type: "psu", watts: 350, volts: 24, img: "https://cdn.shopify.com/s/files/1/0051/5548/7832/products/Meanwell_Power-1_1000x.jpg?v=1637666223", price: 30},
    {name: "BIGTREETECH skr mini e3", type: "motherboard", bits: 32, img: "https://notenoughtech.com/wp-content/uploads/2022/02/BigTreeTech-SKR-Mini-E3-V3.0-1-2.jpg?x98242", price: 50},
    {name: "Titan style", type: "extruder", directDrive: true, bowden: false, diameter: 1.75, img: "https://cdn.shopify.com/s/files/1/0051/5548/7832/files/Titan-extruder-3.jpg?v=1574476049", price: 30},
    {name: "E3D V6", type: "hotEnd", img: "http://cdn.shopify.com/s/files/1/0259/1948/8059/products/v6-hero.jpg?v=1588328839", price: 50},
    {name: "MK8 0.4 Nozzle", type: "nozzle", diameter: 0.4, material: "brass", img: "https://s9352.pcdn.co/wp-content/uploads/2015/01/2016-03-21-nozzle-2.jpg", price: 5},
    {name: "12864 ZW", type: "lcd", img:"https://cdn.shopify.com/s/files/1/0051/5548/7832/products/SOVOL_LCD_7_1000x.jpg?v=1639622031", price: 50}
];

const partsSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    type: {type: String, required: true},
    img: {type: String},
    price: {type: Number, min: 0, required: true},
}, { timestamps: true })

const partsMotionSystemSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    motionType: {type: String},
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
    watts: {type: String},
    volts: {type: String},
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
    diameter: {type: String},
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
    diameter: {type: String},
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

