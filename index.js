
$(document).ready (function() {

  console.log('here');
  getTime();

});

const getTime = function getTime() {
  setInterval(getTime, 1000);

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  document.getElementById('clock').innerHTML =
    hours + ":" + minutes + ":" + seconds;


};
