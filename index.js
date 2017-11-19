// Your code here
$(document).ready(function() {
  // THIS RETURNS THE NEW DATE WITH THE OFFSET EACH TIME THE THIS IS INVOKED
  const calcTime = function calcTime(city, offset) {

    // create Date object for current location
    let date = new Date();

    // get UTC time in msec  // add local time zone offset // convert to msec
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);

    // create new Date object for different city // using supplied offset
    let newDate = new Date(utc + (3600000 * offset));
    return newDate;
  };

  // CREATE ARRAY WITH ALL TIME ZONE OBJECTS
  const createTimeZones = function createTimeZones() {
    const timeZones = {
      'Hawaii': '-10',
      'Seattle': '-8',
      'New York City': '-5',
      'London': '+1',
      'Beijing': '+8',
      'Dubai': '+4'
    };

    const dates = []
    for (let city in timeZones) {
      dates.push(calcTime(city, timeZones[city]));
    }
    return dates;
  };

  // Invoke method
  const allZones = createTimeZones();

  // Update each time clock
  const updateSeconds = function updateSeconds() {
    // Set the seconds as + 1
    allZones[0].setSeconds(allZones[0].getSeconds() + 1);
    $('#hawaii').html(allZones[0]);
    allZones[1].setSeconds(allZones[1].getSeconds() + 1);
    $('#seattle').html(allZones[1]);
    allZones[2].setSeconds(allZones[2].getSeconds() + 1);
    $('#nyc').html(allZones[2]);
    allZones[3].setSeconds(allZones[3].getSeconds() + 1);
    $('#london').html(allZones[3]);
    allZones[4].setSeconds(allZones[4].getSeconds() + 1);
    $('#beijing').html(allZones[4]);
    allZones[5].setSeconds(allZones[5].getSeconds() + 1);
    $('#dubai').html(allZones[5]);
  };

  // Call function before setInterval to avoid initial delay
  updateSeconds();

  setInterval(updateSeconds, 1000); // This never returns anything
});
