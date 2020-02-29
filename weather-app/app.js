const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const address = process.argv[2];
if (address) {
    geoCode(address, (error, geoData) => {
        if (error) {
            return console.log('Error: ', error);
        }
        forecast(geoData.latitude, geoData.longitude, (error, data) => {
            if (error) {
                return console.log('Error', error);
            }
            console.log(geoData.location);
            console.log(`Hal-hazırda tempuratur ${data.tempC} °C-dir (${data.tempF} °F).`);
            console.log(`${data.rainProb}% yağış yağma ehtimalı var`);
            console.log(`${data.nowSum} hava müşahidə olunur`);
            console.log(data.hourlySum);
        })
    })
}
else {
    console.log('Please provide a location');
}