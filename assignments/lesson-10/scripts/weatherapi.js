// current weather

weatherApiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=b72b6b2f9dc4372d814dc544b8f4f970";

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

// forecast weather
forecastApiURLstring = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=b72b6b2f9dc4372d814dc544b8f4f970";
let forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', forecastApiURLstring, true);
forecastRequest.send();
forecastRequest.onload = function() {
  let fd = JSON.parse(forecastRequest.response);
  var forecastTemps = [];
  var forecastDays = [];
  var forecastImg = [];
  var forecastDesc = [];

  let day = 0;
  let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  console.log(fd);

  fd.list.forEach(hour => {
    if (hour.dt_txt.includes("18:00:00")) {
      forecastTemps[day] = hour.main.temp;
      let d = new Date(hour.dt_txt);
      forecastDays[day] = dayNames[d.getDay()];
      forecastImg[day] = hour.weather[0].icon;
      forecastDesc[day] = hour.weather[0].description;
      console.log(hour.dt_txt);
      console.log(d.getDay());
      console.log(hour.weather[0].icon);
      console.log(hour.weather[0].description);
      day++;
    }
  });

  for (let i = 0; i < 5; i++) {
    document.getElementById('day' + i).innerHTML = forecastDays[i];
    document.getElementById('img' + i).setAttribute('src', 'http://openweathermap.org/img/w/' + forecastImg[i] + '.png');
    document.getElementById('img' + i).setAttribute('alt', forecastDesc[i]);
    document.getElementById('tempDay' + i).innerHTML = forecastTemps[i].toFixed(0);
  }
}
