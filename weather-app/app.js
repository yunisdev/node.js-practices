const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
const address = process.argv[2];
if (address) {
    geoCode(address, (error, {latitude,place_name,longitude}) => {
        if (error) {
            return console.log('Error: ', error);
        }
        forecast(latitude, longitude, (error, {temperature,tempF,precipProbability,summary,hourlySum}) => {
            if (error) {
                return console.log('Error', error);
            }
            console.log(place_name);
            console.log(`Hal-hazırda tempuratur ${temperature} °C-dir (${tempF} °F).`);
            console.log(`${precipProbability}% yağıntı ehtimalı var`);
            console.log(`${summary} hava müşahidə olunur`);
            console.log(hourlySum);
        })
    })
}
else {
    console.log('Please provide a location');
}