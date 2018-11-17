/* *************************************
 *  Weather Site JavaScript Functions
 ************************************* */
// Calculate the Windchill
ƒunction; buildWC(speed, temp); {
    const feelTemp = document.getElementById('feelTemp');

    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log(wc);

    // Round the answer down to integer
    wc = Math.floor(wc);

    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;

    // Display the windchill
    console.log(wc);
    // wc = 'Feels like '+wc+'°F';
    feelTemp.innerHTML = wc;
}

function getCondition(condition) {
    if (condition == "cloudy"){
        greeting = "It is cloudy today";
    }
    //  else (condition == "rainy"){
    //     greeting = "It is rainy today";
    // }
    // else (condition == "sunny"){
    //     greeting = "It is sunny today";
    // }
}

changeSummaryImage()

// Wind Dial Function
function windDial(direction) {
    const direction = "NNE"; //Set your own value
    windDial(direction);
}

// Get the wind dial container
const dial = document.getElementById("dial");

// Determine the dial class
switch (direction) {
    case "North":
    case "N":
        dial.setAttribute("class", "n"); //"n" is the CSS rule selector
        break;
    case "NE":
    case "NNE":
    case "ENE":
        dial.setAttribute("class", "ne");
        break;
    case "NW":
    case "NNW":
    case "WNW":
        dial.setAttribute("class", "nw");
        break;
    case "South":
    case "S":
        dial.setAttribute("class", "s");
        break;
    case "SE":
    case "SSE":
    case "ESE":
        dial.setAttribute("class", "se");
        break;
    case "SW":
    case "SSW":
    case "WSW":
        dial.setAttribute("class", "sw");
        break;
    case "East":
    case "E":
        dial.setAttribute("class", "e");
        break;
    case "West":
    case "W":
        dial.setAttribute("class", "w");
        break;
}

// Wind Dial Function
function windDial(direction) {
    // Get the container
    const dial = document.getElementById("dial");
    console.log(direction);
    // Determine the dial class
    switch (direction) {
        case "North":
        case "N":
            dial.setAttribute("class", "n"); //"n" is the CSS rule selector
            break;
        case "NE":
        case "NNE":
        case "ENE":
            dial.setAttribute("class", "ne");
            break;
        case "NW":
        case "NNW":
        case "WNW":
            dial.setAttribute("class", "nw");
            break;
        case "South":
        case "S":
            dial.setAttribute("class", "s");
            break;
        case "SE":
        case "SSE":
        case "ESE":
            dial.setAttribute("class", "se");
            break;
        case "SW":
        case "SSW":
        case "WSW":
            dial.setAttribute("class", "sw");
            break;
        case "East":
        case "E":
            dial.setAttribute("class", "e");
            break;
        case "West":
        case "W":
            dial.setAttribute("class", "w");
            break;
    }
}



// Variables for Function Use
const temp = 31;
const speed = 5;
buildWC(speed, temp);


/*console.log('My javascript is being read.');
var color;
console.log(color);
changeColor();
console.log(color);
function changeColor(){
switch(color){
case "red":
color = "blue";
break;
case "green":
color = "red";
break;
default:
color = "green";
}
}*/