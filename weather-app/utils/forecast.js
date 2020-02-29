const request = require('request');
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4b0f21b1962ec8cee7a7dede1f1c8076/' + latitude + ',' + longitude + '?units=si&lang=az'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast server!', undefined);
        } else if (response.body.error) {
            callback('Unable', undefined);
        } else {
            const data = response.body;
            callback(undefined, {
                zone: data.timezone,
                tempC: data.currently.temperature,
                tempF: Math.floor((data.currently.temperature * 9 / 5 + 32) * 100) / 100,
                rainProb: data.currently.precipProbability,
                nowSum: data.currently.summary,
                hourlySum: data.hourly.summary
            });
        }
    })
}
module.exports = forecast