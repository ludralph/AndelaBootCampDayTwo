
var https = require('https');
https.get("https://api.darksky.net/forecast/d29ce109cbad64110d6b699821303197/37.8267,-122.4233");
var info = "";
response.on("data", function(){
  info += chunk;
});

response.on("end", function(){
  if (response.statusCode === 200){
    try{
      // parsing the string in json object
      var data = JSON.parse(info);
      console.log(data);
    }catch(error){
      console.log("Error parsing data");
    }
  }
  else{
    console.log("Network error");
  }
});
