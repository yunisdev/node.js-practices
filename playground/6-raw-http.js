const https = require('https');
const url = 'https://api.darksky.net/forecast/4b0f21b1962ec8cee7a7dede1f1c8076/40,-75?units=si&lang=az'

const request = https.request(url,(response)=>{
    let data= '';
    response.on('data',(chunk)=>{
        data+=chunk.toString();
    });

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
})
request.on('error',(error)=>{
    console.log('Error',error)
});
request.end()