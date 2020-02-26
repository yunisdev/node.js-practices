const request = require('request');

const url = 'https://api.darksky.net/forecast/4b0f21b1962ec8cee7a7dede1f1c8076/40.4093,49.8671?units=si&lang=az'

// request({
//     url:url,
//     json:true,
// },(error,response)=>{
//     if(error){
//         console.log(error);
//     } else if(response.body.error){
//         console.log(response.body.error);
//     } else {
//         const data = response.body;
//         const temperature = data.currently.temperature;
//         const prcsp = data.currently.precipProbability
//         console.log(`Hal-hazırda tempuratur ${temperature} °C-dir.\n`+
//                     `${prcsp}% yağış yağma ehtimalı var.`);
//         console.log(data.currently.summary+" hava müşahidə olunur.");
//         console.log(data.hourly.summary);
//     }
// });


const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Baku.json?access_token=pk.eyJ1IjoieXVuaXNkZXYiLCJhIjoiY2s3Mzhpd3ZvMDZpZTNlbjNyaGlxZnZ0OCJ9.sz8EpT6gwZSxBC6t-ygMFg&limit=1'
request({
    url:geoUrl,
    json:true
},(error,response)=>{
    if(error){
        console.log(error);
    }else if(response.body.message || response.body.features.length==0){
        console.log(response.body.message);
    }else{
        const data = response.body.features[0].center;
        console.log(data[1]+" , "+data[0]);
    }
})