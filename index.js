const myVar = setInterval(function(){ clock() }, 1000);
const myVar2 = setInterval(function(){ todayDate() }, 1000);

const clock = function digitalClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.getElementById('clock').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(clock, 500);
};

function checkTime(i) {
  if (i < 10) { i = '0' + i };  // add zero in front of numbers < 10
  return i;
};

const todayDate = function todayDate () {
  let now = new Date();
  now = now.toDateString();
  document.getElementById('todayDate').innerHTML =
  now;
};
