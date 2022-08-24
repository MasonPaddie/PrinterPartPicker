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

//New Printers
app.get(`/printers/new`, ( req, res )=>{
    res.render('new.ejs', 
    {});
});

//New Parts
app.get(`/parts/new`, ( req, res )=>{
    res.render('newPart.ejs', 
    {});
});

//New Parts Type
app.get(`/parts/new/:type`, ( req, res )=>{
    res.render(`newPart${req.params.type}.ejs`, 
    {type: req.params.type});
});

//Create Printers
app.post('/printers', ( req, res )=>{
    printers.push(req.body)
    res.redirect('/printers')
});

//Create Parts
app.post('/parts', ( req, res )=>{
    res.redirect(`/parts/new/${req.body.type}`)
});

//Create Parts Type
app.post('/parts/:type', ( req, res )=>{
    parts.push(req.body)
    res.redirect('/parts')
});

//Show Printers
app.get(`/printers/:index`, ( req, res )=>{
    const index = req.params.index
    res.render('showPrinters.ejs',
    {printers: printers,
        index: index
    });
});

//Show Parts
app.get(`/parts/:index`, ( req, res )=>{
    const index = req.params.index
    res.render('showParts.ejs',
    {parts: parts,
        index: index
    });
});

//Edit Printers
app.get(`/printers/:index/edit`, ( req, res )=>{
    res.render('edit.ejs',
    {printers: printers[req.params.index],
    index: req.params.index});
});

//Edit Parts
app.get(`/parts/:index/edit`, ( req, res )=>{
    res.render('edit.ejs',
    {parts: parts[req.params.index],
    index: req.params.index});
});

//Update Printers
app.put('/printers/:index', (req, res) => { 
    printers[req.params.index] = req.body 
      res.redirect('/printers')
})

//Update Parts
app.put('/parts/:index', (req, res) => { 
    parts[req.params.index] = req.body 
      res.redirect('/parts')
})
  
//Destroy Printers
app.delete(`/printers/:index`, ( req, res )=>{
    printers.splice(req.params.index,1)
    res.redirect('/printers')
});

//Destroy Parts
app.delete(`/parts/:index`, ( req, res )=>{
    parts.splice(req.params.index,1)
    res.redirect('/parts')
});

//Mongo Route Printers
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

//Mongo Route Parts
app.post('/parts/', (req, res)=>{
    Parts.create(req.body, (error, createdParts)=>{
        if (error){
        	console.log(error);
        	res.send(error);
        }
        else{
	        res.send(createdParts);
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