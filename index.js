// Your code here
$(document).ready(setInterval(function() {
  const date = new Date().toLocaleTimeString();
  // const hour = date.getHours();
  // const minute = date.getMinutes();
  // const second = date.getSeconds();


  // const timeNow = `${hour} : ${minute} : ${second}`;

  $('#clock').html(date);
}, 1000));
