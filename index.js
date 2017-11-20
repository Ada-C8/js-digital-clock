$(document).ready(function() {

  function update () {
    let time = new Date();
    $('#clock').text(time.toLocaleTimeString());

    let date = new Date();
    $('#date').text(date.toLocaleDateString());
    }

    window.setInterval(update, 1000);
  }
);
