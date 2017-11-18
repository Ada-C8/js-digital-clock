// create date ob
$(document).ready(() => {
  let clock = function clock() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.getDate();

    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let month = months[today.getMonth()];
    let day = days[today.getDay()];
    let year = today.getFullYear();

    let digits = function digits(standIn) {
      if (standIn < 10) {
        standIn = '0' + standIn
      }
      return standIn;
    }

    let displayDate = day + ', ' + month + ' ' +  date + ', ' + year;

    $('#date').html(displayDate);

    let displayTime = digits(hour) + ":" + digits(min) + ":" + digits(sec);

    $('#clock').html(displayTime);
  }

  setInterval(clock, 1000);
});
