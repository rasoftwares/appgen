console.log('App Generator Started ');
console.log('-----------------------------------');
var _ = require('underscore');
var request = require('request');
const fs = require('fs');

var arr = [1,2,3];


 _.each(arr,function(element,index,list){ console.log(element);});


 var environment = "uat";
 var dataStore = "request";
 var authKey = "ve8PdopndzS3yD35SMF6KAd4VKpHQuxUotXNeHGw";
 var appURL = "https://onetouch-d52d4.firebaseio.com/"+ environment + "/" + dataStore +".json?auth="+ authKey;

console.log('https://onetouch-d52d4.firebaseio.com/' + environment + '/' + dataStore + '.json?auth=' + authKey );
var options = {
  url: appURL,
  method: 'GET'
};


 request(options, function(error,response, body){
    // Do responsewith response
    console.log('statusCode:' + response.statusCode);
    //console.log(error);

    var json_data = body;
    console.log( 'Data from Store :' + json_data + '\n');

    //Write the json content to file
    var dataDir = "data/";

    //TODO: File name should be timestamp based.
    var toFile = dataDir + "data.json";

    fs.access(toFile, (err) => {
      if (!err) {
        console.error(toFile + ' already exists');
        return;
      }

      fs.writeFile(toFile, json_data);
      console.log('Data file created to ' + toFile);

    });
});

console.log('-----------------------------------');
console.log('App Generator Finished ');
