const getTime = function getTime() {
  const Now = new Date();
  let hours = Now.getHours();
  if (hours < 10) { hours = `0${hours}`; }
  let minutes = Now.getMinutes();
  if (minutes < 10) { minutes = `0${minutes}`; }
  let seconds = Now.getSeconds();
  if (seconds < 10) { seconds = `0${seconds}`; }
  const Time = `${hours}:${minutes}:${seconds}`;
  $('#clock').text(`${Time}`);
};
const changeTime = function changeTime() {
  setInterval(getTime, 500);
};
$(document).ready(getTime(), changeTime());
