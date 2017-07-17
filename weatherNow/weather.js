const request = require('request');

var weather = (latitude, longitude, callback)=>{

request({
    url: `https://api.darksky.net/forecast/b041490435e6d0b40a0ad6ed4047deb4/${latitude},${longitude}`,
    json: true
}, (error, response, body)=>{
    if(!error && response.statusCode == 200){
        callback(undefined, {
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        });
    }else 
    callback('unable to connect');
    
});
};

module.exports.weather = weather;