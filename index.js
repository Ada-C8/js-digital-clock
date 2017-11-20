$( document ).ready(function(){ // make arrow function
  setInterval('updateClock()', 1000);
});

function updateClock(timeZone = null) {
  const now = new Date();
  console.log(now);
  let currentHours = now.getHours();
  let currentMinutes = now.getMinutes();
  let currentSeconds = now.getSeconds();

currentHours = (currentHours === 0) ? 12 : currentHours;

const timeOfDay = (currentHours > 12) ? 'PM' : 'AM';

currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

currentMinutes = (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes;

currentSeconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;

const currentTimeString = `${currentHours}:${currentMinutes}:${currentSeconds} ${timeOfDay}`


$('#clock').html(currentTimeString);
$('#date').html()
}
