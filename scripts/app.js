import getLocationData from "./geolocation.js";
import { GetWeatherByCityName, GetWeatherOneCall } from "./fetch.js";
import {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage} from "./localStorage.js";



let userInput = document.getElementById('userInput');
let locationName = document.getElementById('locationName');
let submitBtn = document.getElementById('searchBtn');
let favoriteList = document.getElementById('favoriteList');




submitBtn.addEventListener('click',function(e){
   
    GetWeatherByCityName(userInput.value);
    locationName.textContent = userInput.value;
    
  
});

getLocationData();