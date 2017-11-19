
$(document).ready (function() {

  console.log('here');

  getTime();
  printOutDay();

});


const getTime = function getTime() {
  setInterval(getTime, 1000);

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  if (hours > 12) {
    hours = (hours - 12);
  };
  if (seconds < 10 ) {
    seconds = '0' + seconds
  };
  if (minutes < 10 ) {
    minutes = '0' + minutes
  };
  document.getElementById('clock').innerHTML =
    hours + ":" + minutes + ":" + seconds;

};

const printOutDay = function printOutDay() {
  days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  months = ['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let today = new Date();
  let weekday = days[today.getDay()];
  let month = months[today.getMonth()];
  let day = today.getDate();
  let year = today.getFullYear();

  document.getElementById('date').innerHTML =
  weekday + ", " + month + " " + day + ", " + year;

};

$('.menu-toggle').click( function() {
    $("to-nineties").toggleClass("someClass");
} );
