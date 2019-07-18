output = document.getElementById("temples");
fetch('https://webtermdata.glitch.me/temples.json')
    .then(response => {
        return response.json();
    }).then(data => {
        displayInfo(data);
    }).catch(function (error) {
        console.log(error);
});
function displayInfo(data) {
    for (let x = 0; x < 4; x++) {
        var container = document.createElement("div");
        container.classList.add("templeDiv");
        output.children[x].appendChild(container);
        builddiv("h1", data[x].name, "");
        builddiv("h2", data[x].city, "");
        builddiv("h2", data[x].state, "");
        builddiv("p", data[x].address, "");
        builddiv("p", data[x].phone, "");
        builddiv("p", data[x].email, "");
        container.innerHTML += "Closed On: ";
        for (let y = 0; y < data[x].closure.length; y++) {
            builddiv("p", data[x].closure[y].date, "");
        }
        builddiv("p", data[x].history.opened, "Opened on: ");
        builddiv("p", data[x].history.architect, "Architect: ");
        container.innerHTML += "Weather: ";
        if (x == 0) {
            displayWeatherDiv('https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&APPID=cfa52b8f38c093f9979d5f536f241c5d', container);
        } else if (x == 1) {
            displayWeatherDiv('https://api.openweathermap.org/data/2.5/weather?lat=21.65&lon=-157.93&APPID=cfa52b8f38c093f9979d5f536f241c5d', container);
        } else if (x == 2) {
            displayWeatherDiv('https://api.openweathermap.org/data/2.5/weather?lat=50.92&lon=13.37&APPID=cfa52b8f38c093f9979d5f536f241c5d', container);
        } else if (x == 3) {
            displayWeatherDiv('https://api.openweathermap.org/data/2.5/weather?lat=32.53&lon=-117.02&APPID=cfa52b8f38c093f9979d5f536f241c5d', container);
        }
    }
    function displayWeatherDiv(source, container) {
        fetch(source)
        .then(response => {
            return response.json();
        }).then(data => {
            buildWeatherInfo(Math.round(1.8 * (parseInt(data.main.temp) - 273.15) + 32), "Tempature: ", container, "&#8457");
            buildWeatherInfo(data.main.humidity, "Humidity: ", container, "%");
            buildWeatherInfo(data.weather[0].main, "Current Condition: ", container, "");
        }).catch(function (error) {
            console.log(error);
    });
    }
    function buildWeatherInfo(data, caption, output, unit) {
        var div = document.createElement("p");
        div.innerHTML = caption + data + unit;
        output.appendChild(div);
    }
    function builddiv(type, data, caption) {
        var div = document.createElement(type);
        div.innerHTML = caption + data;
        container.appendChild(div);
    }
}