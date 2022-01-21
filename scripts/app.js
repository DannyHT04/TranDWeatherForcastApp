import getLocationData from "./geolocation.js";
import { GetWeatherByCityName, GetWeatherOneCall } from "./fetch.js";
import {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage} from "./localStorage.js";



let userInput = document.getElementById('userInput');
let locationName = document.getElementById('locationName');
let submitBtn = document.getElementById('searchBtn');
let favoriteList = document.getElementById('favoriteList');
// let time = document.getElementById('time');
// let todayTemp = document.getElementById('todayTemp');
// let maxMainTemp = document.getElementById('maxMainTemp');
// let minMainTemp = document.getElementById('minMainTemp');
// let firstDay = document.getElementById('firstDay');
// let icon1 = document.getElementById('icon1');
// let wind1 = document.getElementById('wind1');
// let max1 = document.getElementById('max1');
// let min1 = document.getElementById('min1');
let secondDay = document.getElementById('secondDay');
let icon2 = document.getElementById('icon2');
let wind2 = document.getElementById('wind2');
let max2 = document.getElementById('max2');
let min2 = document.getElementById('min2');
let thirdDay = document.getElementById('thirdDay');
let icon3 = document.getElementById('icon3');
let wind3 = document.getElementById('wind3');
let max3 = document.getElementById('max3');
let min3 = document.getElementById('min3');
let fourthDay = document.getElementById('fourthDay');
let icon4 = document.getElementById('icon4');
let wind4 = document.getElementById('wind4');
let max4 = document.getElementById('max4');
let min4 = document.getElementById('min4');
let fifthDay = document.getElementById('fifthDay');
let icon5 = document.getElementById('icon5');
let wind5 = document.getElementById('wind5');
let max5 = document.getElementById('max5');
let min5 = document.getElementById('min5');



submitBtn.addEventListener('click',function(e){
   
    GetWeatherByCityName(userInput.value);
    locationName.textContent = userInput.value;
    
  
});

getLocationData();