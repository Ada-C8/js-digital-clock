setInterval(function(){currentClock()}, 1000);

  function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
  }

  function currentClock() {
      var currentDate = new Date();
      var currentHours = currentDate.getHours() == 0 ? 12 : currentDate.getHours() > 12 ? currentDate.getHours() - 12 : currentDate.getHours();
      var currentMinutes = addZero(currentDate.getMinutes());
      var currentSeconds = addZero(currentDate.getSeconds());
      //< 10 ? '0' + date.getSeconds() : currentDate.getSeconds();
      var currentAMPM = currentDate.getHours() < 12 ? 'AM': 'PM';
      var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + currentAMPM;
      $("#clock").html(currentTimeString);
}
