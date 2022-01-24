import getLocationData from "./geolocation.js";
import { GetWeatherByCityName, GetWeatherOneCall, checkIfFavorited } from "./fetch.js";
import {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage} from "./localStorage.js";



let userInput = document.getElementById('userInput');
let locationName = document.getElementById('locationName');
let submitBtn = document.getElementById('searchBtn');
let favoriteList = document.getElementById('favoriteList');
let favoriteIcon = document.getElementById('favoriteIcon');
let favoriteIconsymbol = document.getElementById('favoriteIconsymbol');

locationName = 'london';
submitBtn.addEventListener('click',function(e){
    GetWeatherByCityName(userInput.value);
    locationName = userInput.value;

    
  
});
let favOn = false;
favoriteIcon.addEventListener('click',function(e) {

 favOn = checkIfFavorited(locationName);

    if(favOn == true){
        // remove symbol and add minus symbol
        favoriteIconsymbol.classList.add('fa-plus-circle');
        favoriteIconsymbol.classList.remove('fa-minus-circle');
        RemoveFromLocalStorage(locationName);
        checkIfFavorited(locationName);
    }else{
        favoriteIconsymbol.classList.add('fa-minus-circle');
        favoriteIconsymbol.classList.remove('fa-plus-circle');
       SaveToLocalStorageByCityName(locationName);
       checkIfFavorited(locationName);
    }
    favOn = !favOn;
});

getLocationData();

