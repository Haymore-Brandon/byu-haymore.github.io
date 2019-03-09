var t = parseInt(document.getElementById('airTemp').innerHTML);
var s = parseInt(document.getElementById('windSpeed').innerHTML);
var f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
document.getElementById('windChill').innerHTML = f.toFixed(0);
