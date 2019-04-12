const requestURL = "https://byu-haymore.github.io/temple-site/temple-closures.json";
var temple = document.getElementById('temple').innerHTML;

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var closures = request.response;
  populateClosures(closures);
}

function populateClosures (jsonObj) {
  let closeData = jsonObj[temple];
  for (let i = 0; i < closeData.length; i++) {
    let par = document.createElement('p');
    par.textContent = closeData[i];
    document.getElementById('closures').appendChild(par);
  }
}
