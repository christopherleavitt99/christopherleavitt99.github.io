//Get weather information for current location

'use strict';

//Call the function to get our location
getGeoLocation();


//Gets latitude and longitude of current location
function getGeoLocation() {
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            // Combine the values
            const LOCALE = lat + "," + long;
            console.log('Lat and Long are: ${LOCALE}.');

            //Call getData function, send LOCALE
            getCode(LOCALE)
            getComputedStyle(LOCALE);
        })
    } else{
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    }
}


// New AccuWeather code
// Get location code from API
function getCode(LOCALE){
    const API_KEY = '6aFzeDXqDc83LEjA74OPBsan7kvnKvSZ';
    const URL = "https://dataservice.accuweather.com/currentconditions/v1/"+CITY_CODE+"?apikey="+API_KEY+"&details=true";

    fetch(URL)
        .then(response => response.json())
        .then(function (data){
            console.log('Json object from getCode function:');           
            console.log(data);
            const locData =[]; //Create an array
            locData['key'] = data.Key;
            locData['name'] = data.LocalizedName;
            locData['postal'] = data.PrimaryPostalCode;
            locData['state'] = data.AdministrativeArea.LocalizedName;
            locData['geoposition'] = LOCALE;
            locData['elevation'] = data.GeoPosition.Elevation.Imperial.Value;
            //getWeather(locData);
        })
        .catch(error => console.log('There was an error:', error))
}//end getCode function


// Get Current Weather data from API
function getWeather(locData) {
    const API_KEY = 'Your Key Goes Here';
    const CITY_CODE = locData['key']; // We're getting data out of the object
    const URL = "https://dataservice.accuweather.com/currentconditions/v1/"+CITY_CODE+"?apikey="+API_KEY+"&details=true";
    fetch(URL)
     .then(response => response.json())
     .then(function (data) {
      console.log('Json object from getWeather function:');
      console.log(data); // Let's see what we got back
      // Start collecting data and storing it
      locData['currentTemp'] = data[0].Temperature.Imperial.Value;
      locData['summary'] = data[0].WeatherText;
      locData['windSpeed'] = data[0].Wind.Speed.Imperial.Value;
      locData['windUnit'] = data[0].Wind.Speed.Imperial.Unit;
      locData['windDirection'] = data[0].Wind.Direction.Localized;
      locData['windGust'] = data[0].WindGust.Speed.Imperial.Value;
      locData['pastLow'] = data[0].TemperatureSummary.Past12HourRange.Minimum.Imperial.Value;
      locData['pastHigh'] = data[0].TemperatureSummary.Past12HourRange.Maximum.Imperial.Value;
      getHourly(locData); // Send data to getHourly function
      })
     .catch(error => console.log('There was an error: ', error))
  } // end getWeather function
const TEMP = data[0].Temperature.Imperial.Value;
const TEMP = data[0]['Temperature']['Imperial']['Value'];
