// Your code here
$(document).ready(function(){
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December'
  }
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday'
  }

  let clocks = window.setInterval(time, 1000);

  function time() {
    offsets = [0, 17];
    dates = ['#date', '#kr-date'];
    clocks = ['#clock', '#kr-clock'];

    for(let i = 0; i < 2; i++) {
      let date = new Date( new Date().getTime() + offsets[i] * 3600 * 1000);
      year = date.getFullYear();
      month = date.getMonth();
      day = date.getDate();
      dow = date.getDay();
      hour = date.getHours();
      minute = date.getMinutes();
      second = date.getSeconds();
      $(dates[i]).html(days[dow] + ", " + months[month] + " " + day + ", " + year);
      $(clocks[i]).html(hour + ":" + minute + ":" + second);
    }
  }
});
