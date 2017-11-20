// Your code here
// Create a function which will do all of the work to calculate and show the time.
// Use the Date Library in Javascript to retrieve the current date and time information.
//  Use the different methods that are provided to you for retrieving the
//  individual hour, minute and second information.
// Use the setInterval method to utilize the function you've created to update each second.

function prettifyZero(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

const calculateTime = function calculateTime() {
  // Calculates Time
  const hoursContainer = $('.hours');
  const minutesContainer = $('.minutes');
  const secondsContainer = $('.seconds');


  const currentTime = new Date();
  const hour = prettifyZero(currentTime.getHours());
  const minute = prettifyZero(currentTime.getMinutes());
  const second = prettifyZero(currentTime.getSeconds());


  hoursContainer.html(hour);
  minutesContainer.html(`: ${minute}`);
  secondsContainer.html(`: ${second}`);

  // Calculate Date
  const dateContainer = $('.date');
  const date = currentTime.toLocaleDateString();
  dateContainer.html(date);

};


window.setInterval(calculateTime, 500);
