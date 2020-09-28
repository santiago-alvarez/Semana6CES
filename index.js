'use strict'
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.set('port', 4001);
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/principal', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/principal.html'));
});

app.use('/quienes', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/quienes.html'));
});

app.use('/serie', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/serie.html'));
});

app.use('/posters', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/posters.html'));
});

app.use('/mangas', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/mangas.html'));
});

app.use('/figuras', (req, res) =>{
res.sendFile(path.join(__dirname, './public/figuras.html'));
});

app.use('/contacto', (req, res) =>{
    res.sendFile(path.join(__dirname, './public/contacto.html'));
})

app.listen(app.get('port'), ()=>{
    console.log("Server onload in port 3000");
});