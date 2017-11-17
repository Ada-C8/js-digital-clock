// check js
// console.log('hello js');
// check jq
// $('#clock').append('<h2> Hello from jQuery</h2>');

let getTime = function getTime() {

  let time = new Date($.now());
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let timeString = hours + ':' + minutes + ':' + seconds;

  $('#clock').html(timeString);

}

$(document).ready(function() {
  setInterval(getTime, 1000);
});
