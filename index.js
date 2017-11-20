// https://github.com/Ada-Developers-Academy/textbook-curriculum/blob/master/10-JavaScript/jquery-intro.md
// The sample code in the "What Is This Example Doing?"
// The example code causes linter to be angry:
// $(document).ready(function() { ... })

$(document).ready(() => {
  const updateTime = function (num) {
    let updatedNum = num;
    if (num < 10) {
      updatedNum = `0${num}`;
    }
    return updatedNum;
  };

  const thisTime = function (timeDifference) {
    const today = new Date();
    let h = today.getHours() + timeDifference;
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
    return `${h}:${m}:${s}am`;
  };

  // The commented out lines make linter happy, but don't work as expected.
  // Not sure how to make linter happy with the $ function

  $('#seattle').html(`Seattle </br> ${thisTime(0)}`);
  // document.getElementByID('seattle').html(`Seattle </br> ${thisTime(0)}`);
  $('#newyork').html(`New York </br> ${thisTime(3)}`);
  // document.getElementByID('newyork').html(`New York </br> ${thisTime(3)}`);
  $('#london').html(`London </br> ${thisTime(8)}`);
  // document.getElementByID('london').html(`London </br> ${thisTime(8)}`);
  $('#tokyo').html(`Tokyo </br> ${thisTime(17)}`);
  // document.getElementByID('tokyo').html(`Tokyo </br> ${thisTime(17)}`);

  const currentClock = function () {
    $('#seattle').html(`Seattle </br> ${thisTime(0)}`);
    // document.getElementByID('seattle').html(`Seattle </br> ${thisTime(0)}`);
    $('#newyork').html(`New York </br> ${thisTime(3)}`);
    // document.getElementByID('newyork').html(`New York </br> ${thisTime(3)}`);
    $('#london').html(`London </br> ${thisTime(8)}`);
    // document.getElementByID('london').html(`London </br> ${thisTime(8)}`);
    $('#tokyo').html(`Tokyo </br> ${thisTime(17)}`);
    // document.getElementByID('tokyo').html(`Tokyo </br> ${thisTime(17)}`);
  };

  // Interval uses miliseconds
  setInterval(currentClock, 1000);
});
