// let $dOut = $('#date')
let $hours = $('#hours');
let $minutes = $('#minutes');
let $seconds = $('#seconds');
let $amPm = $('#ampm');
// let months = [
//   'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
// ];
//
// let days = [
//   'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
// ];

const update = function update(){
  let date = new Date();

  let ampm = date.getHours() < 12 ? 'AM' : 'PM';

  let hours = date.getHours()
  if (hours == 0) {
    hours = 12;
  } else if (hours != 0 && hours > 12) {
    hours = hours - 12;
  } else {
    hours = hours;
  };

  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  };

  let seconds = date.getSeconds()
  if (seconds < 10) {
    seconds = '0' + seconds;
  };
  //
  // let dayOfWeek = days[date.getDay()];
  // let month = months[date.getMonth()];
  // let day = date.getDate();
  // let year = date.getFullYear();
  //
  // let dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;

  // $dOut.text(dateString);
  $hours.text(hours);
  $minutes.text(minutes);
  $seconds.text(seconds);
  $amPm.text(ampm);
}

update();
window.setInterval(update, 1000);
