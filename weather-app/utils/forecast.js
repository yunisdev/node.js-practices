const request = require('request');
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4b0f21b1962ec8cee7a7dede1f1c8076/' + latitude + ',' + longitude + '?units=si&lang=az'
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to forecast server!', undefined);
        } else if (response.body.error) {
            callback('Unable', undefined);
        } else {
            const {
                timezone,
                currently,
                hourly
            } = response.body
            const {
                temperature,
                precipProbability,
                summary,
            }=currently;
            callback(undefined, {
                timezone,
                temperature,
                tempF: Math.floor((temperature * 9 / 5 + 32) * 100) / 100,
                precipProbability,
                summary,
                hourlySum: hourly.summary
            });
        }
    })
}
module.exports = forecast