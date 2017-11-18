
var intervalID = window.setInterval(myClock, 1000);

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function myClock() {
  // let time = new Date().toLocaleTimeString();
  // $('#clock').text(time);
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let seconds = time.getSeconds();

  $('#hour').text(hour);
  $('#minutes').text(min.pad());
  $('#seconds').text(seconds.pad());
}

function myBackground() {

}
