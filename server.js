const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
var printers = require('./models/printers.js')
const Printers = require('./models/printers.js');
var parts = require('./models/parts.js')
const Parts = require('./models/parts.js');
const methodOverride = require('method-override')
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Index Printers
app.get(`/printers`, ( req, res )=>{
    res.render('index.ejs', 
    {printers: printers});
});
  
//Index Parts
app.get(`/parts`, ( req, res )=>{
    res.render('indexParts.ejs', 
    {parts: parts});
});

//New
app.get(`/printers/new`, ( req, res )=>{
    res.render('new.ejs', 
    {});
});

//Create
app.post('/printers', ( req, res )=>{
    console.log(req.body)
    printers.push(req.body)
    res.redirect('/printers')
});

//Show
app.get(`/printers/:index`, ( req, res )=>{
    const index = req.params.index
    res.render('showPrinters.ejs',
    {printers: printers,
        index: index
    });
});

//Edit
app.get(`/printers/:index/edit`, ( req, res )=>{
    res.render('edit.ejs',
    {printers: printers[req.params.index],
    index: req.params.index});
});

//Update
app.put('/printers/:index', (req, res) => { 
    printers[req.params.index] = req.body 
      res.redirect('/printers')
})
  
//Destroy
app.delete(`/printers/:index`, ( req, res )=>{
    printers.splice(req.params.index,1)
    res.redirect('/printers')
});

//Mongo Route
app.post('/printers/', (req, res)=>{
    Printers.create(req.body, (error, createdPrinters)=>{
        if (error){
        	console.log(error);
        	res.send(error);
        }
        else{
	        res.send(createdPrinters);
        }
    });
});
  
app.listen(port,() => {
    console.log('listening on port' , port)
})


mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});