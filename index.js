
$(document).ready(function() {
  // (Clock name): (Timezone offset)
  const clocks = {
    seattle: -480,
    tokyo: 540,
    newyork: -300,
    utc: 0,
  };

  const updateTime = () => {
    for(let city in clocks) {
      let time = new Date();
      removeLocalOffset(time);
      offsetTime(time, clocks[city]);
      $('#' + city + ' > .hours').text(`${time.getHours()}`.padStart(2, '0'));
      $('#' + city + ' > .minutes').text(`${time.getMinutes()}`.padStart(2, '0'));
      $('#' + city + ' > .seconds').text(`${time.getSeconds()}`.padStart(2, '0'));
      $('#' + city + ' > .date').text(time.toDateString());
    }
  }

  const removeLocalOffset = (time) => {
    let localOffset = time.getTimezoneOffset();
    time.setTime(time.getTime() + ((localOffset) * 60 * 1000));
  };

  const offsetTime = (time, offset) => {
    time.setTime(time.getTime() + (offset * 60 * 1000));
  };

  // Run once for the second before interval begins:
  updateTime();

  // Then run every second:
  const bySeconds = window.setInterval(updateTime, 1000)
});
