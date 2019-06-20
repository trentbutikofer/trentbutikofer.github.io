
    var temp = parseInt(document.getElementById("temp").innerHTML);
    var windspeed = parseInt(document.getElementById("windspeed").innerHTML);

    var windchill = Math.round(35.74 + (0.6215 * temp) -
                              (35.75 * Math.pow(windspeed, 0.16)) + 
                              (0.4275 * temp * Math.pow(windspeed, 0.16)));

    document.getElementById("windchill").innerHTML += windchill;

