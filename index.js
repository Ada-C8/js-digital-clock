// Your code here
const createClock = () => {
  let currentTime = new Date ( );
  // time logic //////////////////
  let hours = currentTime.getHours ( );
  let minutes = currentTime.getMinutes ( );
  let seconds = currentTime.getSeconds ( );

  const formatting = (unit) => {
    if (unit < 10 ) {
      unit = '0' + unit
    }
    return unit
  };
  minute = formatting(minutes);
  second = formatting(seconds);
  // minute = ( minute < 10 ? '0' : "" ) + minute;
  // second = ( second < 10 ? '0' : "" ) + second;
  hours = ( hours > 12 ) ? hours - 12 : hours;
  hours = ( hours == 0 ) ? 12 : hours;

  let timeOfDay = ( hours > 12 ) ? "AM" : "PM";

  let currentTimeString = `${hours}:${minute}:${second} ${timeOfDay}`
  $('#clock').html(currentTimeString);

  // date logic //////////////////
  let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let date = currentTime.getDate()
  let month = months[currentTime.getMonth()];
  let day = days[currentTime.getDay()];
  let year = currentTime.getFullYear();

  let currentDateString = `${day}, ${month} ${date}, ${year}`;

  $('#date').html(currentDateString);

};

$(document).ready(function () {
  setInterval('createClock()', 1000)
});
