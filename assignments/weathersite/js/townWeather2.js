var request1=new XMLHttpRequest;request1.open("GET","https://api.openweathermap.org/data/2.5/weather?zip=83276,us&APPID=cfa52b8f38c093f9979d5f536f241c5d"),request1.responseType="json",request1.send(),request1.onload=function(){townInfo=request1.response,displayTownInfo(townInfo)};var request2=new XMLHttpRequest;function displayForecastInfo(e){var t=[];for(let n=0;n<e.list.length;n++)e.list[n].dt_txt.match("18:00:00")&&t.push([Math.round(1.8*(parseInt(e.list[n].main.temp)-273.15)+32),e.list[n].weather[0].description]);var n=document.getElementById("forecast");n=document.getElementById("forecast");for(let e=0;e<5;e++){var a=new Date,i=new Array(7);i[0]="Sunday",i[1]="Monday",i[2]="Tuesday",i[3]="Wednesday",i[4]="Thursday",i[5]="Friday",i[6]="Saturday";var d=document.getElementById("days").children[e],r=document.createElement("p"),o=a.getDay()+e+1;o>7&&(o-=7),7==o&&(o=0),r.innerHTML=i[o],d.appendChild(r);var s=n.children[e],c=document.createElement("p");c.innerHTML=t[e][0]+"&#8457",s.appendChild(c);var p=document.createElement("img"),m=t[e][1];m.match("clear")?(p.src="images/sun.jpg",p.alt="Sun"):m.match("clouds")?(p.src="images/clouds.png",p.alt="Clouds"):m.match("rain")||m.match("thunderstorm")||m.match("mist")?(p.src="images/rain.png",p.alt="Rain"):m.match("snow")&&(p.src="images/snow.png",p.alt="Snow"),s.appendChild(p)}}function displayTownInfo(e){conditionDiv=document.getElementById("condition"),tempDiv=document.getElementById("temp"),windSpeedDiv=document.getElementById("windspeed"),windChillDiv=document.getElementById("windchill"),humidityDiv=document.getElementById("humidity"),conditionDiv.innerHTML=e.weather[0].main;var t=Math.round(1.8*(parseInt(e.main.temp)-273.15)+32);tempDiv.innerHTML=t+"&#8457";var n=parseInt(2.237*e.wind.speed);windSpeedDiv.innerHTML=n+" MPH";var a=Math.round(35.74+.6215*t-35.75*Math.pow(n,.16)+.4275*t*Math.pow(n,.16));windChillDiv.innerHTML=a+"&#8457";var i=e.main.humidity;humidityDiv.innerHTML=i+"%"}request2.open("GET","https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&APPID=cfa52b8f38c093f9979d5f536f241c5d"),request2.responseType="json",request2.send(),request2.onload=function(){forecastInfo=request2.response,displayForecastInfo(forecastInfo)};