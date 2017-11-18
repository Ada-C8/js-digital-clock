const clock = function digitalClock() {
  let now = new Date();
  console.log(now);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // minutes = minutes.checkTime();
  // seconds = seconds.checkTime();
  document.getElementById('clock').innerHTML =
  hours + ":" + minutes + ":" + seconds;
  var t = setTimeout(clock, 500);
};

function checkTime(i) {
  if (i < 10) { i = '0' + i };  // add zero in front of numbers < 10
  return i;
}

// var myVar = setInterval(function(){ clock() }, 1000);

const todayDate = function todayDate () {
  let now = new Date();
  now = now.toDateString();
  console.log(now)
  // let day = now.getDay();
  // let month = now.getHours();
  // let dateNum = now.getDate();
  // let year = now.getFullYear();
  document.getElementById('todayDate').innerHTML =
  now;
}
// $(document).ready(() => {
// var clockDiv = document.getElementById('clock');
// clockDiv.innerHTML = `<h1>${hours} : ${minutes} : ${seconds}</h1>`;
// $('.clock').append(clock());
// });
