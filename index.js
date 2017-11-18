// Your code here
$(document).ready(function() {
  const seaClock = function seaClock() {
    // Create a new date object
    let date = new Date();

    // Set the seconds as + 1
    date.setSeconds(date.getSeconds() + 1);

    // Select the #clock html elements and update it with the new dat
    $('#hawaii').html(date);
    $('#seattle').html(date);
    $('#nyc').html(date);
    $('#london').html(date);
    $('#beijing').html(date);
    $('#dubai').html(date);
  };







  // Call function before setInterval to avoid initial delay
  seaClock();

  // Each time the function is run, append it to the same html element
  setInterval(seaClock, 1000); // This never returns anything
});

// new Date().toLocaleString("en-US", {timeZone: "America/New_York"})

// Update your clock to have world clock functionality which will show four different clocks in four different timezones of your choice
// Update your clock to show the full date with the day of the week, and the month, day and year
