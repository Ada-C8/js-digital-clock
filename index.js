// Your code here


$(document).ready(function() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let t = h + ':' + m + ':' + s;
  $('#clock').append(t);

});


// $('#clock').append(Date.now());
