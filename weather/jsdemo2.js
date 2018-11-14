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
}