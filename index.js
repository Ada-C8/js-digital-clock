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

  let digitAdjust = function digitAdjust(number) {
    if (number < 10) {
      number = '0' + number;
    }
    return number;
  };

$('#date').html('<p>' + currentDay + '</p>' + '<p>' + currentMonth + ' ' + currentTime.getDate() + ', ' + currentTime.getFullYear() + '</p>');

  $('#time').html('<p>' + digitAdjust(currentHour) + ':' + digitAdjust(currentMinute) + ':' + digitAdjust(currentSecond) + '</p>');
};

setInterval(clock, 1000);
