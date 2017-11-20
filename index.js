// Your code here
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const clock = function clock() {
  let currentTime = new Date();
  let currentMonth = MONTHS[currentTime.getMonth()];
  let currentDay = DAYS[currentTime.getDay()];
  let currentHour = currentTime.getHours();
  let currentMinute = currentTime.getMinutes();
  let currentSecond = currentTime.getSeconds();

$('#date').html('<p>' + currentDay + '</p>' + '<p>' + currentMonth + ' ' + currentTime.getDate() + ', ' + currentTime.getFullYear() + '</p>');

  $('#time').html('<p>' + currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds() + '</p>');
};

setInterval(clock, 1000);
