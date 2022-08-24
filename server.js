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
  
//Show
app.get(`/printers/:index`, ( req, res )=>{
    const index = req.params.index
    console.log(printers)
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
  

app.listen(port,() => {
    console.log('listening on port' , port)
})

//... and then farther down the file
mongoose.connect('mongodb://127.0.0.1:27017/basiccrud', { useNewUrlParser: true});
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});