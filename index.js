$(document).ready(function() {

  function update () {
    let date = new Date();
    $('#clock').text(date.toLocaleTimeString());
    }
    window.setInterval(update, 1000);
  }
);
