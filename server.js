const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemon = require('./model/pokemon');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/css', express.static('css'));



app.get('/pokemon', (req,res) => {
    res.render('index.ejs', {pokemon: pokemon})
});

app.get('/pokemon/:id', (req,res) =>{
    res.render('show.ejs', {pokemon: pokemon[req.params.id]}); 
});

app.post('/pokemon', (req, res) => {
    res.redirect('/pokemon');
});








app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
});

module.exports = app;