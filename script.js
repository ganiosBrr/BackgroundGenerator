var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var cssHeader = document.querySelector(".css"); 
var body = document.getElementById("gradient");



function gradient() {
    cssHeader.textContent = body.style.background = "linear-gradient(to right," 
    + color1.value 
    + "," 
    + color2.value 
    + ")";   
}

document.addEventListener("DOMContentLoaded", gradient);
color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);