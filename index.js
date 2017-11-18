// check js
// console.log('hello js');
// check jq
// $('#clock').append('<h2> Hello from jQuery</h2>');

let getTime = function getTime() {

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


  let time = new Date($.now());

  let dayName = days[time.getDay() - 1];
  let day = time.getDate();
  let month = months[time.getMonth() - 1];
  let year = time.getFullYear();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let pmAm = '';

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours > 12) {
    hours -= 12;
    pmAm = 'PM';
  } else {
    pmAm = 'AM';
  }

  $('#date').html(dayName + ', ' + month + ' ' + day + ', ' + year)

  $('#hour').html(hours);
  $('#minute').html(minutes);
  $('#second').html(seconds);
  $('#pm-am').html(pmAm);
} //end of getTime function

$(document).ready(function() {
  setInterval(getTime, 1000);
});
