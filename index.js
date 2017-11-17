// Your code here
$(document).ready(setInterval(function() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const timeNow = `${hour} : ${minute} : ${second}`;

  $('#clock').html(timeNow);
}, 1000));
