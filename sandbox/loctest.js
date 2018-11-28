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
            getComputedStyle(LOCALE);
        })
    } else{
        status.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
    }
}