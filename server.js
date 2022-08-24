const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
var printers = require('./models/printers.js')
// const Printers = require('./models/printers.js');
// const methodOverride = require('method-override')
// app.use(express.static('public'));
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(methodOverride('_method'))

//Index
app.get(`/printers`, ( req, res )=>{
    res.render('index.ejs', 
    {printers: printers});
});
  
app.listen(port,() => {
    console.log('listening on port' , port)
})

//... and then farther down the file
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});