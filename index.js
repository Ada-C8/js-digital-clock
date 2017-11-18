// Your code here
$(document).ready(setInterval(function() {
  const date = new Date().toLocaleTimeString();

  $('#clock').html(date);
}, 1000));
