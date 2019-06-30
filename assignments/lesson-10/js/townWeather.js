window.onload = getTownData();
window.onload = getForecastData();
function getTownData() {
      var requestURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=cfa52b8f38c093f9979d5f536f241c5d';
          var request = new XMLHttpRequest();
          request.open('GET', requestURL);
          request.responseType = 'json';
          request.send();
    
      request.onload = function() {
        var townInfo = request.response;
        displayTownInfo(townInfo);
      }
}
function getForecastData() {
    var requestURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=cfa52b8f38c093f9979d5f536f241c5d';
          var request = new XMLHttpRequest();
          request.open('GET', requestURL);
          request.responseType = 'json';
          request.send();
    
      request.onload = function() {
        var forecastInfo = request.response;
        displayForecastInfo(forecastInfo);
      }
}
function displayForecastInfo(forecastInfo) {
    var forecasts = [];
    console.log(forecastInfo);
    for (let x = 0; x < forecastInfo.list.length; x++) {
        if (forecastInfo.list[x].dt_txt.match("18:00:00")) {
            forecasts.push(Math.round(9/5*((parseInt(forecastInfo.list[x].main.temp))-273.15)+32));
        }
    }
    var forecastDiv = document.getElementById("forecast");
    for (let y = 0; y < 5; y++) {
        var forecastIndex = forecastDiv.children[y];
        var forecastText = document.createElement("p");
            forecastText.innerHTML = forecasts[y] + "&#8457";
            forecastIndex.appendChild(forecastText);
        var icon = document.createElement("img");
            icon.src = "images/weatherIcon.jpg";
            forecastIndex.appendChild(icon);
    }
}
function displayTownInfo(townInfo) {
    conditionDiv = document.getElementById("condition");
    tempDiv = document.getElementById("temp");
    windSpeedDiv = document.getElementById("windspeed");
    windChillDiv = document.getElementById("windchill");
    humidityDiv = document.getElementById("humidity");

    conditionDiv.innerHTML = townInfo.weather[0].main;
    var temp = Math.round(9/5*((parseInt(townInfo.main.temp))-273.15)+32);
    tempDiv.innerHTML = temp + "&#8457";
    var windSpeed = parseInt((townInfo.wind.speed)*2.237);
    windSpeedDiv.innerHTML = windSpeed + " MPH";
    var windChill = Math.round(35.74+(0.6215*temp)-(35.75*Math.pow(windSpeed,0.16)) + (0.4275*temp*Math.pow(windSpeed, 0.16)));
    windChillDiv.innerHTML = windChill + "&#8457";
    var humidity = townInfo.main.humidity;
    humidityDiv.innerHTML = humidity + "%";
}