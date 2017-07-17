const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weatherToday = require('./weatherNow/weather.js');

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to get weather update',
        string: true
    }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(results.address);

        weatherToday.weather(results.latitude, results.longitude, (errorMessage, result)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currently ${result.temperature} but feels like ${result.apparentTemperature}.`);
            }
        });
    }
}); 


