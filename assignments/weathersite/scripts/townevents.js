const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
let currentTown = document.getElementById('currentTown').innerHTML;
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  populateEvents(townData, currentTown);
}

function populateEvents(jsonObj, currentTown) {
  let towns = jsonObj['towns'];
  for (let i = 0; i < towns.length; i++) {
    townName = towns[i].name;
    if ( townName == currentTown) {
      let events = towns[i].events;
      console.log(events);
      for (let e = 0; e < events.length; e++) {
        let par = document.createElement('p');
        par.textContent = events[e];
        console.log(events[e]);
        document.getElementById('town-events').appendChild(par);
      }
    }
  }

}
