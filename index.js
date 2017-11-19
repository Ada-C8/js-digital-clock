// evenly space out 255 (max base 16 to 2 places) by num possible secs/mins/hrs
const maxNum = 255;
const hexPerSecMin = Math.floor((maxNum / 59) * 100) / 100; // 4.32
const hexPerHr = Math.floor((maxNum / 23) * 100) / 100; // 11.08

$(document).ready(() => {
  const runClock = function runClock() {
    const curTime = new Date();

    const hrsAsHex = Math.floor(curTime.getHours() * hexPerHr).toString(16);
    const minAsHex = Math.floor(curTime.getMinutes() * hexPerSecMin).toString(16);
    const secAsHex = Math.floor(curTime.getSeconds() * hexPerSecMin).toString(16);

    $('#clock').html(curTime.toLocaleTimeString());
    $('body').css({ backgroundColor: `#${hrsAsHex}${minAsHex}${secAsHex}` });
  };
  setInterval(runClock, 1000);
});
