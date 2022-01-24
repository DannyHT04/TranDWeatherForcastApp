// let favorites = [
//     'Lodi','Stockton','Tokyo'
// ]
let favorites = [];
function SaveToLocalStorageByCityName(cityName)
{
    favorites.push(cityName);
    localStorage.setItem('Favorites',JSON.stringify(favorites));
    
}
function SaveToLocalStorage(){
    localStorage.setItem('Favorites',JSON.stringify(favorites));
}
function GetLocalStorage(){
    const localStorageItem = localStorage.getItem('Favorites');
    favorites = JSON.parse(localStorageItem);
    //console.log(favorites);
    localStorageItem != null ? favorites = JSON.parse(localStorageItem) : favorites = [];
    //favorites = JSON.parse(localStorage.getItem('Favorites'));
    return favorites;
}

function RemoveFromLocalStorage(cityName){
    let cityIndex = favorites.indexOf(cityName);
    //found cityname in array favorites
    favorites.splice(cityIndex,1);
    SaveToLocalStorage();
}


export {SaveToLocalStorageByCityName, GetLocalStorage, RemoveFromLocalStorage}