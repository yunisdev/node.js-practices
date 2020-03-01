const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
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
    if(!req.query.address){
        return res.send({
            error:'You have not provide an address'
        })
    }
    const {address} = req.query;
    geoCode(address, (error, {latitude,place_name,longitude}={}) => {
        if (error) {
            return res.send({
                error
            });
        }
        forecast(latitude, longitude, (error, {temperature,tempF,precipProbability,summary,hourlySum}) => {
            if (error) {
                return res.send({
                    error
                });
            }
            res.send({
                location:place_name,
                tempData:`Hal-hazırda tempuratur ${temperature} °C-dir (${tempF} °F).`,
                precipProb:`${precipProbability}% yağıntı ehtimalı var`,
                sum:`${summary} hava müşahidə olunur`,
                hourlySum,
            })
        })
    })
})

app.get('/help/*',(req,res)=>{
    res.render('help404',{
        title:'404 page',
        errMessage:'Article not found',
        name:'Yunis Huseynzade'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 page',
        errMessage:'Page not found',
        name:'Yunis Huseynzade'
    });
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
})