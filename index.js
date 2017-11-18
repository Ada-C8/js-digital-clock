$(document).ready(function() {
  function clock (){
    let date = new Date();
    $('#clock').text(date.toLocaleTimeString() );
  }
  window.setInterval(clock, 1000)
})
