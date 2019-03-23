const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
const townList = ["Fish Haven", "Preston", "Soda Springs"];
var request = new XMLHttpRequest();
var section = document.querySelector('.town-data');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  populateTownData(townData);
}

function populateTownData (jsonObj) {
  var towns = jsonObj['towns'];
  for (var i = 0; i < towns.length; i++) {
    var town = towns[i];
    if (townList.includes(towns[i]['name'])) {
      switch (towns[i]['name']) {
        case "Fish Haven":
          var image = "images/fish-haven-popular-store-200.jpg";
          var imageAlt = "Main store in Fish Haven";
          break;
        case "Preston":
          var image = "images/preston-sign-200.jpg";
          var imageAlt = "Welcome to Preston sign.";
          break;
        case "Soda Springs":
          var image = "images/soda-springs-sign-200.jpg";
          var imageAlt = "Welcome to Soda Springs sign";
          break;
      }
      var townItem = document.createElement('div');
      townItem.setAttribute("class", "town-item");

      var myH2 = document.createElement('h2');
      var myH3 = document.createElement('h3');
      myH2.textContent = town['name']
      myH3.textContent = town['motto']

      var stats = document.createElement('div');
      stats.setAttribute("class", "town-stats");

      var myPara1 = document.createElement('p');
      var myPara2 = document.createElement('p');
      var myPara3 = document.createElement('p');
      myPara1.textContent = 'Year Founded: ' + town['yearFounded'];
      myPara2.textContent = 'Current Population: ' + town['currentPopulation'];
      myPara3.textContent = 'Average Rainfall: ' + town['averageRainfall'] + '"';

      var myImg = document.createElement('img');
      myImg.setAttribute("src", image);
      myImg.setAttribute("alt", imageAlt);

      townItem.appendChild(myH2);
      townItem.appendChild(myH3);
      stats.appendChild(myPara1);
      stats.appendChild(myPara2);
      stats.appendChild(myPara3);
      stats.appendChild(myImg);
      section.appendChild(townItem);
      townItem.appendChild(stats);
    } else {
      continue;
    }
  }
}
