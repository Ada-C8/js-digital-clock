// Your code here
console.log('hello');


// $('#clock').append('<h2> Hello World! </h2>');
const updateDate = function updateDate() {
  const currentTime = new Date();
  const currentDay = currentTime.getDate();
  const currentMonth = currentTime.getMonth();
  const currentYear = currentTime.getFullYear();
  return `${currentDay} / ${currentMonth} / ${currentYear}`
}


const updateClock = function updateClock() {
  const currentTime = new Date();
  let currentHours = currentTime.getHours();
  let timeOfDay = 'AM'
  if (currentHours > 12) {
    currentHours = currentHours - 12;
    timeOfDay = 'PM'
  };

  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
  };

  let currentSeconds = currentTime.getSeconds();
  if (currentSeconds < 10) {
    currentSeconds = '0' + currentSeconds;
  };

  let time = `${currentHours}: ${currentMinutes}: ${currentSeconds} ${timeOfDay}`;
  return time;
};

const ellapsedTime = function ellapsedTime() {
  let currentTime = new Date ( );
  const party = new Date(Date.UTC(2009, 6, 28, 12, 0));
  let diff = Math.round((currentTime - party) / 1000);
  let y = Math.floor(diff/(365.25*24*60*60));
  diff = diff-(y*365.25*24*60*60);
  let d = Math.floor(diff/(24*60*60));
  diff = diff-(d*24*60*60)
  var h = Math.floor(diff/(60*60));
  diff = diff-(h*60*60);
  var m = Math.floor(diff/(60));
  diff = diff-(m*60);
  var s = Math.floor(diff);
  let timeToParty = 'Years: ' + y + '\nDays: '+ d + '\n Hours: ' + h + '\n Mins: ' + m + '\nSeconds:' + s;
  return timeToParty;
};


$('document').ready(() => {
  setInterval(function() {
    $('#currentDate').text(updateDate, 1000);
  });
  setInterval(function() {
    $('#currentTime').text(updateClock, 1000);
  });
  setInterval(function() {
    $('#time-travel').text(ellapsedTime, 1000);
  });
});
