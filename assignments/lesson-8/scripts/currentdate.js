function getCurrentDate() {
  var today = new Date();
  var dow = today.getDay();
  var day = today.getDate();
  var month = today.getMonth() + 1; //January is 0!
  var year = today.getFullYear();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var monthName = new Array(12);
  monthName[0] = "January";
  monthName[1] = "February";
  monthName[2] = "March";
  monthName[3] = "April";
  monthName[4] = "May";
  monthName[5] = "June";
  monthName[6] = "July";
  monthName[7] = "August";
  monthName[8] = "September";
  monthName[9] = "October";
  monthName[10] = "November";
  monthName[11] = "December";

  var d = weekday[dow] + ', ' + day + ' '+ monthName[month] + ' ' + year;

  return d;
}

document.getElementById('currentdate').innerHTML = getCurrentDate();
