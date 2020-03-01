const request = require('request');
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoieXVuaXNkZXYiLCJhIjoiY2s3Mzhpd3ZvMDZpZTNlbjNyaGlxZnZ0OCJ9.sz8EpT6gwZSxBC6t-ygMFg&limit=1'
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Server`ə qoşulmadı', undefined);
        } else if (body.features.length == 0) {
            callback('Məkan tapılmadı!', undefined);
        } else {
            const {center,place_name} = body.features[0];
            callback(undefined, {
                latitude: center[1],
                longitude: center[0],
                place_name,
            })
        }
    })
}
module.exports = geoCode;