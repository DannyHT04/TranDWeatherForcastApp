
function success(position){
    console.log(position);
}

function error(err){
    console.warn(err);
}

let options ={
    enablehighAccuracy: true,
    timeout: 5000,
    maximunAge:0
}

function getLocationData(){
    //Navigator
    navigator.geolocation.getCurrentPosition(success,error,options)
}

export default getLocationData;
