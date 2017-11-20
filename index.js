// random fun stuff generator
// this is huge and ugly and unnecessary
// I thought it would be fun!
// wasn't able to figure out how to read from a csv
// used my code from Fortune Teller

const STUDY_IMAGES = [
  'https://data.whicdn.com/images/54970742/original.gif',
  'https://media1.tenor.com/images/f89419c5bc4357c8686eb7ab380ed61c/tenor.gif',
  'https://data.whicdn.com/images/287013151/original.gif',
  'https://data.whicdn.com/images/287012755/original.gif',
  'https://data.whicdn.com/images/278595253/original.gif',
  'https://media.giphy.com/media/AaGsBkc5WKQUg/giphy.gif',
  'https://media1.tenor.com/images/ac699b4f59ea1f649e25f32e78a0e4c1/tenor.gif',
  'https://media.giphy.com/media/RUtoJvFmaJJBu/giphy.gif',
  'https://66.media.tumblr.com/e1095c11b0428ab234245980fc32440e/tumblr_inline_o7fczoVbnR1tat2xb_500.gif',
  'https://pa1.narvii.com/5706/7434da0d5b525fdab6b851a73f26496657ce95b7_hq.gif',
  'https://zippy.gfycat.com/CornyEvenGrayreefshark.gif',
  'http://www.reactiongifs.com/r/sad.gif',
  'https://i.imgur.com/YKZEzRx.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/cc/11/2a/cc112aadc97c39b880f79fe44713c1a3.gif',
  'https://s-media-cache-ak0.pinimg.com/originals/e6/b7/33/e6b733e17b68a922253ca0f0428a569e.gif',
  'http://media.tumblr.com/927493cb46c286c56841937dab8b395b/tumblr_inline_nc7i9nSap01s6lw3t.gif',
  'https://media1.tenor.com/images/420141860295ff5ad26208ff187431ce/tenor.gif',
  'https://gifimage.net/wp-content/uploads/2017/09/anime-typing-gif-2.gif',
  'https://78.media.tumblr.com/503307fc1bf3f184e80c217ff4ff7569/tumblr_o96nxvPnHE1tgoxx3o1_500.gif',
  'http://78.media.tumblr.com/a0c9149c20703dc759ee32f220d93b27/tumblr_ol24rlfCaP1vwtn8so1_500.gif',
  'https://media.giphy.com/media/JBgjP8Iye0X60/giphy.gif',
  'https://fat.gfycat.com/IdealisticUglyKitten.gif',
  'http://i.imgur.com/7UfcMM3.gif'
];

const updateImage = function updateImage() {
  const i = Math.floor(Math.random() * STUDY_IMAGES.length);
  const image = STUDY_IMAGES[i];
  const $randomImage = $('#random-image');
  $randomImage.attr('src', image);
}

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

// create IDs for CSS
const $hours = $('#hours');
const $minutes = $('#minutes');
const $seconds = $('#seconds');
const $amPm = $('#ampm');

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

// displays a random image every 5 seconds
updateImage();
window.setInterval(updateImage, 5000);

// calls updateClock() with current time info and adds to the matching fields in HTML doc
updateClock();
// 'window' is current window
// did not work with 'document'
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// updateClock will be called every interval (gathers 'getSeconds()' at each 1000 milliseconds)
window.setInterval(updateClock, 1000);
