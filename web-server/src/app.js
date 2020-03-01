const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and vsiews location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Yunis Huseynzade'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Yunis Huseynzade'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'ahahafhs',
        name: 'Yunis Huseynzade'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        temperature: 50
    });
})

app.get('/help/*',(req,res)=>{
    res.render('help404')
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})