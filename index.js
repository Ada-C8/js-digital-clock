const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const currTime = function currTime() {
  const formatTime = function formatTime(timeInterval) {
    if (timeInterval < 10) {
      return `0${timeInterval}`;
    } else {
      return `${timeInterval}`;
    }
  };

  let currDate = new Date();
  let hour = currDate.getHours();
  let min = formatTime(currDate.getMinutes());
  let second = formatTime(currDate.getSeconds());
  let dayName = currDate.getDay();
  let month = currDate.getMonth();
  let day = currDate.getDate();
  let year = currDate.getFullYear();
  let amOrPm;

  if (hour === 0) {
    hour = 12;
    amOrPm = 'AM';
  } else if (hour > 12) {
    hour -= 12;
    amOrPm = 'PM';
  } else {
    amOrPm = 'AM';
  }

  $('#date-info').html(`Today is ${daysOfWeek[dayName]}, ${monthsOfYear[month]} ${day}, ${year}`);
  $('#clock').html(`${hour}:${min}:${second} ${amOrPm}`);
};

$(document).ready(() => {
  window.setInterval(currTime, 1000);
});
