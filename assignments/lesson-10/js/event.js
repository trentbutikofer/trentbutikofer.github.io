window.onload = getData();
function getData() {
    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
  
    request.onload = function() {
      var events = request.response;
      console.log(events);
      display(events);
    }
}
function display(events) {
    var eventDiv = document.getElementById("event");
    var eventText = document.createElement("p");

    for (let x = 0; x < events.towns[4].events.length; x++) {
        var event = events.towns[4].events[x];
        eventText.innerHTML += event + "<br>";
    }
    eventDiv.appendChild(eventText);

}