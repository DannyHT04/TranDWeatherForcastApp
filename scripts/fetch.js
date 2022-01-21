
import {prod, dev} from './environment.js';
let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall";
let lat= '?lat=';
let lon = '&lon=';
let apiKey = '&units=imperial&appid=';
let cityName = '?city=';
let todayTemp = document.getElementById('todayTemp');
let weatherCall_pt1 = "https://api.openweathermap.org/data/2.5/forecast";
let weatherCall_city_pt2 = "?q=";

let maxMainTemp = document.getElementById('maxMainTemp');
let minMainTemp = document.getElementById('minMainTemp');
let time = document.getElementById('time');
let firstDay = document.getElementById('firstDay');
let icon1 = document.getElementById('icon1');
let wind1 = document.getElementById('wind1');
let max1 = document.getElementById('max1');
let min1 = document.getElementById('min1');



if(prod.isLive){
    apiKey += prod.apiKey;
} else{
    apiKey += dev.apiKey;
}

function GetWeatherOneCall( latitutde, longitude){
    lat += latitutde;
    lon += longitude;
  
    fetch(urlOneCall_pt1 + lat + lon + apiKey).then(resp => resp.json()).then(data => console.log(data));
    
}
function GetWeatherByCityName(nameOfCity){
    fetch(weatherCall_pt1+weatherCall_city_pt2+nameOfCity+apiKey).then(resp => resp.json()).then(data=>{
        todayTemp.textContent = data.list[0].main.temp + "°F";
        maxMainTemp.textContent = data.list[0].main.temp_max + "°F";
        minMainTemp.textContent = data.list[0].main.temp_min + "°F";
        time.textContent = data.list[0].dt_txt;
        
        console.log(data);
    });
}
//GetWeatherOneCall(38.1341,121.2722);

export {GetWeatherByCityName, GetWeatherOneCall}

