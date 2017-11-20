// random fun stuff generator
// this is huge and ugly and unnecessary
// I thought it would be fun!
// wasn't able to figure out how to read from a csv
// used my code from Fortune Teller

const STUDY_IMAGES = [
  'https://data.whicdn.com/images/54970742/original.gif',
  'https://media1.tenor.com/images/f89419c5bc4357c8686eb7ab380ed61c/tenor.gif',
  'http://25.media.tumblr.com/17dff029b61e33f352bd4c707d487519/tumblr_n1sj8p3uhD1sq9yswo3_500.gif',
  'https://data.whicdn.com/images/287013151/original.gif',
  'https://data.whicdn.com/images/287012755/original.gif',
  'https://data.whicdn.com/images/278595253/original.gif'
];

const updateImage = function updateImage() {
  const i = Math.floor(Math.random() * STUDY_IMAGES.length);
  let image = STUDY_IMAGES[i];
  let $randomImage = $('#random-image');
  $randomImage.attr('src', image);
}

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// create IDs for CSS
let $hours = $('#hours');
let $minutes = $('#minutes');
let $seconds = $('#seconds');
let $amPm = $('#ampm');

// function compiles all info needed to track time
// and adds the text created to the fields with matching IDs
const updateClock = function updateClock(){
  // initialize new Date object
  let date = new Date();

  let amPm = date.getHours();
  // if the hour is less than 12, AM
  if (amPm < 12) {
    amPm = 'AM';
    // if the hour is less than 12, PM
  } else if (amPm > 12) {
    amPm = 'PM';
  };

  let hours = date.getHours()
  // if hour is 0, midnight (12)
  if (hours == 0) {
    hours = 12;
  // if hour is > 12, -12 so is not military time
  } else if (hours != 0 && hours > 12) {
    hours = hours - 12;
  } else {
  // no change
    hours = hours;
  };

  let minutes = date.getMinutes()
  // add leading 0 so always two digits
  if (minutes < 10) {
    minutes = '0' + date.getMinutes();
  };

  let seconds = date.getSeconds()
  // add leading 0 so always two digits
  if (seconds < 10) {
    seconds = '0' + seconds;
  };

  // jQuery $ for output
  // assigned at very top to IDs
  // add text to fields with matching ID
  $hours.text(hours);
  $minutes.text(minutes);
  $seconds.text(seconds);
  $amPm.text(amPm);
}

updateImage();
window.setInterval(updateImage, 10000);
// calls updateClock() with current time info and adds to the matching fields in HTML doc
updateClock();

// 'window' is current window
// did not work with 'document'
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// updateClock will be called every interval (gathers 'getSeconds()' at each 1000 milliseconds)
window.setInterval(updateClock, 1000);
