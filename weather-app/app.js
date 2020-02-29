const request = require('request');
const geoCode = require('./utils/geocode.js');
const forecast = require('./utils/forecast.js');
// const url = 'https://api.darksky.net/forecast/4b0f21b1962ec8cee7a7dede1f1c8076/40.4093,49.8671?units=si&lang=az'

// request({
//      url:url,
//      json:true,
//  },(error,response)=>{
//      if(error){
//          console.log(error);
//      } else if(response.body.error){
//          console.log(response.body.error);
//      } else {
//          const data = response.body;
//          const temperature = data.currently.temperature;
//          const prcsp = data.currently.precipProbability
//          console.log(`Hal-hazırda tempuratur ${temperature} °C-dir (${temperature*9/5 + 32} °F).\n`+
//                      `${prcsp}% yağış yağma ehtimalı var.`);
//          console.log(data.currently.summary+" hava müşahidə olunur.");
//          console.log(data.hourly.summary);
//      }
//  });
forecast(40.36666,49.83518,(error,data)=>{
    console.log('Error',error);
    console.log('Data',data);
})
// geoCode('Baku',(error,data)=>{
//     console.log('Error: ',error);
//     console.log('Data: ',data);
// })
