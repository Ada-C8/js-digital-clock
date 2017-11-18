// Your code here
const getTime = () => {
  // get the current time
  let time = new Date ();

  // parse out the hour, minute, and second
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  let month = time.getMonth()
  let date = time.getDate()
  let year = time.getFullYear()

  // add in extra placeholder 0s when needed
  const addZeros = (timeIncrement) => {
    if ( timeIncrement < 10 ) {
      timeIncrement = '0' + timeIncrement
    }
    return timeIncrement
  };

  hours = addZeros(hours);
  minutes = addZeros(minutes);
  seconds = addZeros(seconds);



  // set the right string for the month
  switch (time.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'Febuary';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  };

  // create the date string to displayed
  let dateToDisplay = `${month} ${date}, ${year}`

  // create the time string to display
  let timeToDisplay = `${hours}:${minutes}:${seconds} \n`
  let datesToDisplay =

  // add the string to the #clock html element so it is displayed on the page
  $('#clock').html(timeToDisplay)
  $('#clock').append(dateToDisplay)

}; // getTime

// call the function to display the time on the page and update it every second
$(document).ready(function () {
  // update the clock every second
  setInterval('getTime()', 1000)
});
