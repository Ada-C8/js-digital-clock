// Your code here
$(document).ready(setInterval(function() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  //
  // if (hour > 12) {
  //   hour -= 12
  // }
  //
  // if (second < 10){
  //   // second = `0${second}`
  // }


  const timeNow = `${hour} : ${minute} : ${second}`;

  $('#clock').html(timeNow);
}, 1000));
