/* eslint-disable */
setInterval(clock, 1000)
function clock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let month = now.getMonth();
  let year = now.getFullYear();
  let weekDay = now.getDay();
  let date = now.getDate();

function monthName(){
  let monthNames = [ "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December" ];
  return monthNames[month];
}
function weekDayName(){
  let weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekDayNames[weekDay];
}
function amPm(){
    if (hour < 12) {
      return "in the morning";
    } else if (hour < 17) {
      return "in the afternoon";
    } else {
      return "in the evening"}
  }
function convertHour(){
    if (hour == 0) {
      return 12;
    } else if (hour > 12) {
      return hour - 12;
    } else {
      return hour;
    }
  }
function addZero(input){
  if (input < 10) {
    return '0' + input.toString();
  } else {
    return input;
  }
}
  $('.today').html(`<p class ='weekDay'>${weekDayName().toUpperCase()}</p><p class='month'>${monthName().toUpperCase()}</p><p class='day'>${date}</p><p class='year'>${year}</p>`);

  $('.clock').html(`<p class='time'>${convertHour()}:${addZero(minute)}:${addZero(second)}</p><p class='amPm'>${amPm().toUpperCase()}</p>`);


}
clock();
