// https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/10-JavaScript/jquery-intro.md
// The sample code in the "What Is This Example Doing?"
// The example code causes linter to be angry:
// $(document).ready(function() { ... })

$(document).ready(() => {
  const updateTime = function (num) {
    let updatedNum = num;
    if (num < 10) {
      updatedNum = `0 ${num}`;
    }
    return updatedNum;
  };

  const thisTime = function () {
    const today = new Date();
    let h = today.getHours();
    if (h >= 24) {
      h -= 24;
    }
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = updateTime(h);
    m = updateTime(m);
    s = updateTime(s);
    if (h > 12) {
      return `${h - 12}:${m}:${s}pm`;
    }

    return `${h - 12}:${m}:${s}am`;
  };

  $('#clock').append(thisTime());

  const currentClock = function () {
    $('#clock').html(thisTime());
  };

  // Interval uses miliseconds
  setInterval(currentClock, 1000);
});
