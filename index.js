// https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/10-JavaScript/jquery-intro.md
// The sample code in the "What Is This Example Doing?"
// The example code causes linter to be angry:
// $(document).ready(function() { ... })

$(document).ready(function () {
  const thisTime = function() {
    let today = new Date();
    let h = today.getHours();
    if (h >= 24) {
      h = h - 24;
    }
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = updateTime(h);
    m = updateTime(m);
    s = updateTime(s);
    if (h > 12) {
      return ((h-12) + ':' + m + ':' + s + ' pm');
    } else {
      return (h + ':' + m + ':' + s + ' am');
    }
  };

  const updateTime = function (num) {
    if (num < 10) {
      num = '0' + num;
    };
    return num;
  };

  $('#clock').append(thisTime());

  const currentClock = function (){
    $('#clock').html(thisTime());
  };

  // Interval uses miliseconds
  setInterval(currentClock, 1000);
});
