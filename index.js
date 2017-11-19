
$(document).ready(() => {
  const runClock = function runClock() {
    const curTime = new Date();
    $('#clock').html(curTime.toLocaleTimeString());
  };
  setInterval(runClock, 1000);
});
