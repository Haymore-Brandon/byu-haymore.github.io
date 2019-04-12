let townID = {
  "Gilbert, AZ Temple": 5295903,
  "San Diego, CA Temple": 5391811,
  "Tucson, AZ Temple": 5318313,
  "Denver, CO Temple": 5419384
}
var currentTown = document.getElementById('temple').innerHTML;

weatherApiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=" + townID[currentTown] + "&units=imperial&APPID=b72b6b2f9dc4372d814dc544b8f4f970";


let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', weatherApiURLstring, true);
weatherRequest.send();
weatherRequest.onload = function() {
  var weatherData = JSON.parse(weatherRequest.response);
  document.getElementById('currentDisc').innerHTML = weatherData.weather[0].main;
  document.getElementById('high').innerHTML = weatherData.main.temp_max.toFixed(0);
  document.getElementById('humidity').innerHTML = weatherData.main.humidity;
  document.getElementById('windSpeed').innerHTML = weatherData.wind.speed.toFixed(0);

  chillTemp(weatherData.main.temp, weatherData.wind.speed);
}

// calculate the chill temperature
function chillTemp (airTemp, windSpeed) {
  let t = airTemp;
  let s = windSpeed;
  let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
  document.getElementById('windChill').innerHTML = f.toFixed(0);
}
