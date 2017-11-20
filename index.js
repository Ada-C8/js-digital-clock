$(document).ready(function() {
  // THIS RETURNS THE NEW DATE WITH THE OFFSET EACH TIME THIS IS INVOKED
  const calcTime = (offset) => {

    // create Date object for current location
    let date = new Date();

    // get UTC time in msec  // add local time zone offset // convert to msec
    let timeZone = date.getTime() + (date.getTimezoneOffset() * 60000);

    // create new Date object for different city // using supplied offset
    let newDate = new Date(timeZone + (3600000 * offset));
    return newDate;
  };

  // CREATE ARRAY WITH ALL TIME ZONE OBJECTS
  const createTimeZones = () => {
    const offsets = ['-10', '-8', '-5', '0', '+8', '+4'];

    const selectors = ['#hawaii', '#seattle', '#nyc', '#london', '#beijing', '#dubai'];

    const dates = {};
    i = 0;
    while (i < selectors.length) {
      dates[selectors[i]] = calcTime(offsets[i]);
      i++;
    }
    return dates;
  };

  const allZones = createTimeZones();

  // UPDATE EACH TIME CLOCK
  const updateSeconds = () => {
    Object.keys(allZones).forEach((zone) => {
      let day = allZones[zone].getDate();
      let month = allZones[zone].getMonth() + 1; // Month counts begin at 0 :|
      let year = allZones[zone].getFullYear();

      let hour = allZones[zone].getHours();
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      let minute = allZones[zone].getMinutes();
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }
      let seconds = allZones[zone].getSeconds() + 1;
      if (seconds.toString().length == 1) {
        seconds = "0" + seconds;
      }
      allZones[zone].setSeconds(seconds);
      $(zone).html(day + "/" + month + "/" + year + '<br>' + hour + ":" + minute + ":" + seconds);
    });
  };

  // Call function before setInterval to avoid initial delay
  updateSeconds();

  // Format in a readable fashion incrementing each by 1 second
  setInterval(updateSeconds, 1000); // This never returns anything
});
