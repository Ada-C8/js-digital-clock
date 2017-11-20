// Your code here
var clock = function() {
  var now = new Date();
  var h = tickTock(now.getHours());
  var m = tickTock(now.getMinutes());
  var s = tickTock(now.getSeconds());

  var time = $('<p>' + h + ":" + m + ":" + s + '</p>');
  $('#clock').empty();
  $('#clock').append(time);
};

var tickTock = function(number) {
  return (number < 10 ? '0' : '') + number;
};


$(document).ready(function() {

  setInterval(clock, 1000);

});
