// for CSS
let $hours = $('#hours');
let $minutes = $('#minutes');
let $seconds = $('#seconds');
let $amPm = $('#ampm');

const updateClock = function updateClock(){
  // initialize new Date object
  let date = new Date();

  let amPm = date.getHours();
  // if the hour is less than 12, AM
  if (amPm < 12) {
    amPm = 'AM';
    // if the hour is less than 12, PM
  } else if (amPm > 12) {
    amPm = 'PM';
  };

  let hours = date.getHours()
  // if hour is 0, midnight (12)
  if (hours == 0) {
    hours = 12;
  // if hour is > 12, -12 so is not military time
  } else if (hours != 0 && hours > 12) {
    hours = hours - 12;
  } else {
  // no change
    hours = hours;
  };

  let minutes = date.getMinutes()
  // add leading 0 so always two digits
  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  };

  let seconds = date.getSeconds()
  // add leading 0 so always two digits
  if (seconds < 10) {
    seconds = '0' + seconds;
  };

  // jQuery $ for output
  // assigned at very top to IDs
  // add text to fields with matching ID
  $hours.text(hours);
  $minutes.text(minutes);
  $seconds.text(seconds);
  $amPm.text(amPm);
}

updateClock();
// set interval to 1000 milliseconds (1 second)
// 'window' is current window
// did not work with 'document'
window.setInterval(updateClock, 1000);
