const twoDigits = function twoDigits(time) {
  let returnTime = time;
  if (time < 10) {
    returnTime = `0${time}`;
  }
  return returnTime;
};

const getTime = function getTime() {
  const date = new Date(Date.now());
  const hours = date.getHours();
  const minutes = twoDigits(date.getMinutes());
  const seconds = twoDigits(date.getSeconds());

  $('#clock').html(`<span>${hours}:${minutes}:${seconds}</span>`);
};

const changeTime = function changeTime() {
  setInterval(getTime, 1000);
};
