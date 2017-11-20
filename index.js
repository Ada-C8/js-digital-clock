
function clock() {

  let time = new Date();
  let hours = time.getHours();
  if (hours < 10) {
    hours = '0' + hours;
  }
  let minutes = time.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = time.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  // let milliseconds = time.getMilliseconds();
  // all javascript functions are in milliseconds

  let digitalClock = hours + ':' + minutes + ':' + seconds
  if (hours > 12) {
    digitalClock = digitalClock + ' PM'
  } else {
    digitalClock = digitalClock + ' AM'
  }


  $('#clock').text(digitalClock);
  // clearInterval(ticker) good way to break code
}

$(document).ready(function()
{
    let date = moment().format('dddd MMMM Do YYYY');
    $('#date').text(date);

    let ticker = setInterval('clock()', 1000);

    // clearInterval(ticker) //no time will show

    // setTimeout(function(){
    //   clearInterval(ticker);
    // }, 3000);  // stop clock after a certain time

});
