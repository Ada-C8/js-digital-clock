$(document).ready(() => {
  const fixDigit = function fixDigit(val) {
    return val.toString().length === 1 ? `0${val}` : val;
  };
  const calcTime = function calcTime() {
    const now = new Date();
    const hours = fixDigit(now.getHours());
    const minutes = fixDigit(now.getMinutes());
    const seconds = fixDigit(now.getSeconds());
    $('#clock').html(`<span>${hours}:${minutes}:${seconds}</span>`);
  };
  const updateClock = function updateClock() {
    setInterval(calcTime, 1000);
  };
  updateClock();
});
