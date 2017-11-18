// Your code here

  setInterval(function() {
      let date = new Date();
      let ampm = date.getHours() < 12
                     ? 'AM'
                     : 'PM';
      $('#clock').text(
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + ampm
          );
  }, 1000)
