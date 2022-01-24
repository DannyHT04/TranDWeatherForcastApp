// import {geolat, geoLong} from './geolocation.js';
import {GetLocalStorage} from './localStorage.js';
import {prod, dev} from './environment.js';
let urlOneCall_pt1 = "https://api.openweathermap.org/data/2.5/onecall";
let lat= '?lat=';
let lon = '&lon=';
let apiKey = '&units=imperial&appid=';
let cityName = '?city=';
let todayTemp = document.getElementById('todayTemp');
let weatherCall_pt1 = "https://api.openweathermap.org/data/2.5/forecast";
let weatherCall_city_pt2 = "?q=";

if(prod.isLive){
    apiKey += prod.apiKey;
} else{
    apiKey += dev.apiKey;
}
let locationName = document.getElementById('locationName');
let maxMainTemp = document.getElementById('maxMainTemp');
let minMainTemp = document.getElementById('minMainTemp');
let time = document.getElementById('time');
let firstDay = document.getElementById('firstDay');
let icon1 = document.getElementById('icon1');
let wind1 = document.getElementById('wind1');
let max1 = document.getElementById('max1');
let min1 = document.getElementById('min1');
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
let mainIcon = document.getElementById('mainIcon');
let favoriteIconsymbol = document.getElementById('favoriteIconsymbol');
let background = document.getElementById('background');
let latitutde1;
let longitude1;
let searchbg = document.getElementById('searchbg');
let searchbg2 = document.getElementById('searchbg2');
let card0 = document.getElementById('card0');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let card4 = document.getElementById('card4');
let card5 = document.getElementById('card5');
let card6 = document.getElementById('card6');
let card7 = document.getElementById('card7');
function getLondonWeather(){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,us'+ apiKey).then(resp => resp.json()).then(LondonData => 
        {
            locationName.textContent = LondonData.city.name;
        todayTemp.textContent = LondonData.list[0].main.temp + "°C";
        maxMainTemp.textContent = LondonData.list[0].main.temp_max + "°C";
        minMainTemp.textContent = LondonData.list[0].main.temp_min + "°C";
        time.textContent = LondonData.list[0].dt_txt;
        console.log(LondonData);

        firstDay.textContent = displayDay(LondonData.list[0].dt_txt);
        max1.textContent = LondonData.list[0].main.temp_max + "°C";
        min1.textContent = LondonData.list[0].main.temp_min + "°C";
        wind1.textContent = LondonData.list[0].wind.speed;
        // 2nd day
        secondDay.textContent = displayDay(LondonData.list[8].dt_txt);
        wind2.textContent = LondonData.list[8].wind.speed;
        max2.textContent = LondonData.list[8].main.temp_max + "°C";
        min2.textContent = LondonData.list[8].main.temp_min + "°C";
        // 3rd
        thirdDay.textContent = displayDay(LondonData.list[16].dt_txt);
        max3.textContent = LondonData.list[16].main.temp_max + "°C";
        min3.textContent = LondonData.list[16].main.temp_min + "°C";
        wind3.textContent = LondonData.list[16].wind.speed;
        // end of 3rd
        //start of 4th
        fourthDay.textContent = displayDay(LondonData.list[24].dt_txt);
        max4.textContent = LondonData.list[24].main.temp_max + "°C";
        min4.textContent = LondonData.list[24].main.temp_min + "°C";
        wind4.textContent = LondonData.list[24].wind.speed;
        // start of 5th
        fifthDay.textContent = displayDay(LondonData.list[32].dt_txt);
        max5.textContent = LondonData.list[32].main.temp_max + "°C";
        min5.textContent = LondonData.list[32].main.temp_min + "°C";
        wind5.textContent = LondonData.list[32].wind.speed;
        // end of 5th
      
        iconChangeMain(LondonData.list[0].weather[0].main);
        iconChange1(LondonData.list[0].weather[0].main);
        iconChange2(LondonData.list[8].weather[0].main);
        iconChange3(LondonData.list[16].weather[0].main);
        iconChange4(LondonData.list[24].weather[0].main);
        iconChange5(LondonData.list[32].weather[0].main);

        });
}
getLondonWeather();





function GetWeatherOneCall( latitutde, longitude){
    setTimeout(setLatLog(),300);
    lat += latitutde;
    lon += longitude;
    
  
    fetch(urlOneCall_pt1 + lat + lon + apiKey).then(resp => resp.json()).then(calldata => 
        {
            // getting the min and max temp for the days
            max2.textContent = calldata.daily[2].temp.max + "°F";
            min2.textContent = calldata.daily[2].temp.min + "°F";
            max3.textContent = calldata.daily[3].temp.max + "°F";
            min3.textContent = calldata.daily[3].temp.min + "°F";
            max4.textContent = calldata.daily[4].temp.max + "°F";
            min4.textContent = calldata.daily[4].temp.min + "°F";
            max5.textContent = calldata.daily[5].temp.max + "°F";
            min5.textContent = calldata.daily[5].temp.min + "°F";
            console.log(calldata);
        });
    
}




function setLatLog(){
     lat= '?lat=';
     lon = '&lon=';
}
function GetWeatherByCityName(nameOfCity){
    fetch(weatherCall_pt1+weatherCall_city_pt2+nameOfCity+apiKey).then(resp => resp.json()).then(data=>{
        locationName.textContent = data.city.name;
        todayTemp.textContent = data.list[0].main.temp + "°F";
        maxMainTemp.textContent = data.list[0].main.temp_max + "°F";
        minMainTemp.textContent = data.list[0].main.temp_min + "°F";
        time.textContent = data.list[0].dt_txt;
        console.log(data);
        
        if(data.list[0].sys.pod == 'n'){
            background.classList.add('mainNight');
            background.classList.remove('mainbg');
            searchbg.classList.add('blackBox');
            searchbg.classList.remove('lightblueBox');
            searchbg2.classList.add('blackBox3');
            searchbg2.classList.remove('darkbluebox');
            card0.classList.add('blackBox2');
            card1.classList.add('blackBox2');
            card2.classList.add('blackBox2');
            card3.classList.add('blackBox2');
            card4.classList.add('blackBox2');
            card5.classList.add('blackBox2');
            card6.classList.add('blackBox2');
            card7.classList.add('blackBox2');
            card0.classList.remove('lightblueBox2');
            card1.classList.remove('lightblueBox2');
            card2.classList.remove('lightblueBox2');
            card3.classList.remove('lightblueBox2');
            card4.classList.remove('lightblueBox2');
            card5.classList.remove('lightblueBox2');
            card6.classList.remove('lightblueBox2');
            card7.classList.remove('lightblueBox2');
        }else{
            background.classList.add('mainbg');
            background.classList.remove('mainNight');
            searchbg.classList.add('lightblueBox');
            searchbg.classList.remove('blackBox');
            searchbg2.classList.add('darkbluebox');
            searchbg2.classList.remove('blackBox3');
            card0.classList.add('lightblueBox2');
            card1.classList.add('lightblueBox2');
            card2.classList.add('lightblueBox2');
            card3.classList.add('lightblueBox2');
            card4.classList.add('lightblueBox2');
            card5.classList.add('lightblueBox2');
            card6.classList.add('lightblueBox2');
            card7.classList.add('lightblueBox2');
            card0.classList.remove('blackBox2');
            card1.classList.remove('blackBox2');
            card2.classList.remove('blackBox2');
            card3.classList.remove('blackBox2');
            card4.classList.remove('blackBox2');
            card5.classList.remove('blackBox2');
            card6.classList.remove('blackBox2');
            card7.classList.remove('blackBox2');
        }
       
        // first day card
        firstDay.textContent = displayDay(data.list[0].dt_txt);
        max1.textContent = data.list[0].main.temp_max + "°F";
        min1.textContent = data.list[0].main.temp_min + "°F";
        wind1.textContent = data.list[0].wind.speed;
        // 2nd day
        secondDay.textContent = displayDay(data.list[8].dt_txt);
        wind2.textContent = data.list[8].wind.speed;
        // 3rd
        thirdDay.textContent = displayDay(data.list[16].dt_txt);
        
        wind3.textContent = data.list[16].wind.speed;
        // end of 3rd
        //start of 4th
        fourthDay.textContent = displayDay(data.list[24].dt_txt);
       
        wind4.textContent = data.list[24].wind.speed;
        // start of 5th
        fifthDay.textContent = displayDay(data.list[32].dt_txt);
       
        wind5.textContent = data.list[32].wind.speed;
        // end of 5th
      
        iconChangeMain(data.list[0].weather[0].main);
        iconChange1(data.list[0].weather[0].main);
        iconChange2(data.list[8].weather[0].main);
        iconChange3(data.list[16].weather[0].main);
        iconChange4(data.list[24].weather[0].main);
        iconChange5(data.list[32].weather[0].main);

        latitutde1 = data.city.coord.lat;
        longitude1 = data.city.coord.lon;

        let favOn;
        let cityLowerCase = nameOfCity.value;
        favOn = checkIfFavorited(cityLowerCase);
        console.log(favOn);
        if(favOn){
            //the minus is here
            favoriteIconsymbol.classList.add('fa-plus-circle');
            favoriteIconsymbol.classList.remove('fa-minus-circle');
        }else{
         
        favoriteIconsymbol.classList.add('fa-minus-circle');
        favoriteIconsymbol.classList.remove('fa-plus-circle');
        }
        favOn = !favOn;


        setTimeout(GetWeatherOneCall(latitutde1,longitude1),300);
    });
}



// function for check favorited
function checkIfFavorited(cityNameEntered) {
    const favorites = GetLocalStorage();
    console.log(JSON.stringify(favorites));
    return favorites.includes(cityNameEntered);
}
//GetWeatherOneCall(38.1341,121.2722);

export {GetWeatherByCityName, GetWeatherOneCall, checkIfFavorited}


function displayDay(time){
    let d = new Date(time);
    let weekday = ["Saturday","Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday"];
    return weekday[d.getUTCDay()];
}

function iconChangeMain(weather){
    mainIcon.classList.remove("imgSunny","imgCloudy","imgRain","imgSnow","imgPartlySunny");
    if(weather == 'Clouds'){
        mainIcon.classList.add('imgCloudy');

    }else if(weather == 'Clear'){
        mainIcon.classList.add('imgSunny')
    }else if(weather == 'Snow'){
        mainIcon.classList.add('imgSnow')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        mainIcon.classList.add('imgRain');
    }else{
        mainIcon.classList.add('imgCloudy');
    };
    
}
function iconChange1(weather){
    icon1.classList.remove("imgSunny2","imgCloudy2","imgRain2","imgSnow2","imgPartlySunny2");

    if(weather == 'Clouds'){
        icon1.classList.add('imgCloudy2');

    }else if(weather == 'Clear'){
        icon1.classList.add('imgSunny2')
    }else if(weather == 'Snow'){
        icon1.classList.add('imgSnow2')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        icon1.classList.add('imgRain2');
    }else{
        icon1.classList.add('imgCloudy2');
    };
    
}
function iconChange2(weather){
    icon2.classList.remove("imgSunny2","imgCloudy2","imgRain2","imgSnow2","imgPartlySunny2");

    if(weather == 'Clouds'){
        icon2.classList.add('imgCloudy2');

    }else if(weather == 'Clear'){
        icon2.classList.add('imgSunny2')
    }else if(weather == 'Snow'){
        icon2.classList.add('imgSnow2')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        icon2.classList.add('imgRain2');
    }else{
        icon2.classList.add('imgCloudy2');
    };
    
}
function iconChange3(weather){
    icon3.classList.remove("imgSunny2","imgCloudy2","imgRain2","imgSnow2","imgPartlySunny2");

    if(weather == 'Clouds'){
        icon3.classList.add('imgCloudy2');

    }else if(weather == 'Clear'){
        icon3.classList.add('imgSunny2')
    }else if(weather == 'Snow'){
        icon3.classList.add('imgSnow2')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        icon3.classList.add('imgRain2');
    }else{
        icon3.classList.add('imgCloudy2');
    };
    
}
function iconChange4(weather){
    icon4.classList.remove("imgSunny2","imgCloudy2","imgRain2","imgSnow2","imgPartlySunny2");

    if(weather == 'Clouds'){
        icon4.classList.add('imgCloudy2');

    }else if(weather == 'Clear'){
        icon4.classList.add('imgSunny2')
    }else if(weather == 'Snow'){
        icon4.classList.add('imgSnow2')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        icon4.classList.add('imgRain2');
    }else{
        icon4.classList.add('imgCloudy2');
    };
    
}
function iconChange5(weather){
    icon5.classList.remove("imgSunny2","imgCloudy2","imgRain2","imgSnow2","imgPartlySunny2");

    if(weather == 'Clouds'){
        icon5.classList.add('imgCloudy2');

    }else if(weather == 'Clear'){
        icon5.classList.add('imgSunny2')
    }else if(weather == 'Snow'){
        icon5.classList.add('imgSnow2')
    }else if(weather =='Rain' || weather == 'Drizzle'){
        icon5.classList.add('imgRain2');
    }else{
        icon5.classList.add('imgCloudy2');
    };
    
}