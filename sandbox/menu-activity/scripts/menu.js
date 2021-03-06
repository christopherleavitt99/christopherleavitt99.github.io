/* ********************************
 *  Menu Activity
 ******************************** */

// Get menu where clicks will occur
const MENULINK = document.getElementById('page-nav');

// Intercept the menu link clicks
MENULINK.addEventListener('click', function (evt) {
 // Get the data values for state and city
 // See https://javascript.info/bubbling-and-capturing for evt.target explanation
 let cityName = evt.target.dataset['city'];
 let stateName = evt.target.dataset['state'];
 console.log(cityName);
 console.log(stateName);
 if(cityName != null){
 evt.preventDefault();
let LOCALE = cityName

 getData(LOCALE);
 }

});


// Get location code from weather.json file
function getData(LOCALE) {
let URL = "/sandbox/menu-activity/weather.json";
 fetch(URL)
  .then(response => response.json())
  .then(function (data) {
   console.log('Json object from getCode function:');
   console.log(data);
   const locData = {}; // Create an object
   locData['name'] = data[locale]['City'];
   locData['postal'] = data[locale]['zip'];
   locData['state'] = data[locale]['State'];
   locData['geoposition'] = data[locale]['Latitude'] + "," + data[locale]['Longitude'];
   locData['temp'] = data[locale]['Currenttemp'];
    locData[summary] = data[locale]['Summary'];
//    locData['elevation'] = ;
console.log(locData);
buildPage(locData)
   })
  .catch(error => console.log('There was a getCode error: ', error))
} // end getCode function

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }

  function buildPage(locData){
    document.getElementById("Currenttemp").innerHTML = locData['temp'] + "&deg; F"
    document.getElementById("summary").innerHTML = locData['summary']
  }