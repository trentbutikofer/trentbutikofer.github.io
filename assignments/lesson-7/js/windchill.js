function windchill() {

    var temp = parseInt(document.getElementById("temp").value);
    var windspeed = parseInt(document.getElementById("windspeed").value);

    var windchill = Math.round(35.74 + (0.6215 * temp) -
                              (35.75 * Math.pow(windspeed, 0.16)) + 
                              (0.4275 * temp * Math.pow(windspeed, 0.16)));

    if (isNaN(windchill)) {
        document.getElementById("windchill").innerHTML = "Wind Chill:";
    } else {
        document.getElementById("windchill").innerHTML = "Wind Chill: " + windchill;
    }   
}