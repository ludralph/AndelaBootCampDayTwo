'use strict';
let https = require('https');

const URL = 'https://api.darksky.net/forecast/';
const API_KEY = 'd29ce109cbad64110d6b699821303197';
const LONGITUDE = '6.4980';
const LATITUDE =  '3.3439';
https.get(URL+ API_KEY + "/"+LONGITUDE+","+LATITUDE, function(response){
    let info = "";
    response.on("data", function(chunk){
      info += chunk;
});

response.on("end", function(){
  if (response.statusCode === 200){
    try{
          // parsing the string in json object
          let data = JSON.parse(info);
          console.log("The Weather is "+ data.currently.summary+" in "+data.timezone);
          console.log("The daily summary is "+ data.daily.summary);
        }catch(error){
          console.log("Error parsing data");
        }
      }
      else{
        console.log("Network error");
      }
});

});
