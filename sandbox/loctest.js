//Get weather information for current location

'use strict';

//Call the function to get our location
getGeoLocation();


//Gets latitude and longitude of current location
function getGeoLocation(){
    const status = document.getElementById('status');
    status.innerHTML = 'Getting Location...';
    if (navigator.geolocation){
        
    }
}