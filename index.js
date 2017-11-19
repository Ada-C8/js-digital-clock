// adds leading zeros to num as string
const pad = function pad(num, size) {
  const str = '0'.repeat(6) + num;
  return str.slice(str.length - size);
};

const hexPerSecMin = 4.32;
const hexPerHr = 11.08;

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
