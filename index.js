$(document).ready(() => {
  setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const addZeros = function addZeros(time) {
      if (time < 10) {
        return (`0${time}`);
      }
      return time;
    };

    const time = (`${addZeros(h)}:${addZeros(m)}:${addZeros(s)}`);

    $('#clock').text(time);
  }, 1000);
});
