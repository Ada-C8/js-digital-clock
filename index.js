const pad = function pad(n) {
  if (n < 10) {
    return (`0${n}`);
  }
  return n;
};
function myColor(secs) {
  const hue = secs * 6;
  const sat = 75;
  const lig = 40;
  return `hsl(${hue}, ${sat}%, ${lig}%)`;
}
function myClock() {
  const time = new Date();
  const weekDay = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  };
  const months = {
    1: 'Jan',
    2: 'Feb',
    3: 'Mar',
    4: 'Apr',
    5: 'May',
    6: 'Jun',
    7: 'Jul',
    8: 'Aug',
    9: 'Sept',
    10: 'Oct',
    11: 'Nov',
    12: 'Dec',
  };
  const hour = time.getHours();
  const min = time.getMinutes();
  const secs = time.getSeconds();
  const month = months[time.getMonth() + 1];
  const day = weekDay[time.getDay()];

  const color = myColor(secs);
  $('body').css('background-color', color);

  $('#day').text(`${day}, ${month} ${time.getDate()}`);
  $('#hour').text(hour).css('color', color);
  $('#minutes').text(pad(min)).css('color', color);
  $('#seconds').text(pad(secs)).css('color', color);
}
window.setInterval(myClock, 1000);
