
$(document).ready(() => {
  const runClock = function runClock() {
    const curTime = new Date();
    $('#clock').html(curTime.toLocaleTimeString());
  };
});
