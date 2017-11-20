
let clock = document.getElementById('clock');
let hexColor = document.getElementById('hex-color');

function hexClock() {
  let time = new Date();
  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();
  let session = "PM";

  if (hours === 0) {
    hours = 12;
  }

  if (hours < 12 ){
    session = "AM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  if(hours < 10){
    hours = "0" + hours ;
  }

  if(minutes < 10){
    minutes = "0" + minutes;
  }

  if(seconds < 10){
    seconds = "0" + seconds;
  }

  let clockStr = hours + ' : ' + minutes + ' : ' + seconds + " " + session;
  let hexColorStr = '#' + hours + minutes + seconds;

  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);
