// Your code here
// Create a function which will do all of the work to calculate and show the time.
// Use the Date Library in Javascript to retrieve the current date and time information.
//  Use the different methods that are provided to you for retrieving the
//  individual hour, minute and second information.
// Use the setInterval method to utilize the function you've created to update each second.


const calculateTime = function calculateTime() {
  // Calculates Time
  const hoursContainer = $('.hours');
  const minutesContainer = $('.minutes');
  const secondsContainer = $('.seconds');


  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  hoursContainer.html(hour);
  minutesContainer.html(`: ${minute}`);
  secondsContainer.html(`: ${second}`);

  // Calculate Date
  const dateContainer = $('.date');
  const date = currentTime.toLocaleDateString();
  dateContainer.html(date);

};

window.setInterval(calculateTime, 500);
