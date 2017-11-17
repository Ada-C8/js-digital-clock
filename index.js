const twoDigits = function twoDigits(time) {
  let returnTime = time;
  if (time < 10) {
    returnTime = `0${time}`;
  }
  return returnTime;
};

const getTime = function getTime() {
  const date = new Date(Date.now());
  const hours = twoDigits(date.getHours());
  const minutes = twoDigits(date.getMinutes());
  const seconds = twoDigits(date.getSeconds());

  $('#clock').html(`<span>${hours}:${minutes}:${seconds}</span>`);
};

let interval;
const changeTime = function changeTime() {
  interval = setInterval(getTime, 1000);
};
