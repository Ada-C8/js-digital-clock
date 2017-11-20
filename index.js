$( document ).ready(function(){ // make arrow function
  setInterval('updateClock()', 1000);
  setInterval('updateDegrees()', 1000);

  // $('div').click( function() {
  //   $(this).toggleClass('cute');
  // })
  clickOrange;
  keyAlert;
});

const updateClock = function updateClock(timeZone = null) {
  const timeOffset = (timeZone === null) ? 0 : timeZone
  const now = new Date();
  console.log(now);
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const currentSeconds = now.getSeconds();
  getTimeString(currentHours, currentMinutes, currentSeconds);
  setDate(now);
}

const getTimeString = function getTimeString(currentHours, currentMinutes, currentSeconds) {
  const timeOfDay = (currentHours > 12) ? 'PM' : 'AM';
  let hours = (currentHours === 0) ? 12 : currentHours;
  hours = (currentHours > 12) ? currentHours - 12 : currentHours;
  const minutes = (currentMinutes < 10) ? `0${currentMinutes}` : currentMinutes;
  const seconds = (currentSeconds < 10) ? `0${currentSeconds}` : currentSeconds;
  const currentTimeString = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
  $('#clock').html(currentTimeString);
}

const setDate = function setDate(date) {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const dateString = `${month}-${day}-${year}`;
  $('#date').html(dateString);
}


const clickOrange = $('div').click( function() {
  $(this).toggleClass('cute');
});

const getEmote = function getEmote(id) {
  const kaomojis = ['(ᅌᴗᅌ✿)', '( ˘ ³˘)♥', '(╯︵╰)', '(´∩｀。)', '▼・ᴥ・▼', 'ʅʕ•ᴥ•ʔʃ', '(๑•﹏•)⋆* ⁑⋆*', 'ヽ(`д´；)/', ' (ღˇᴗˇ)｡o'];
  const emote = kaomojis[Math.floor(Math.random()*kaomojis.length)];
  insertEmote(id, emote);
};

const insertEmote = function insertEmote(id, emote) {
  $(`${id}`).text(emote).show().fadeOut(2000);
};

const clickLilGuy = function clickLilGuy() {
  $('#lil-guy').one('click'), function() {
    getEmote('#lil-guy');
  }
};

const keyAlert = $('body').keydown(function(event){
  const vowels = ["a", "e", "i", "o", "u"];
  const others = ["s", "d", "x", "z"];
  if (vowels.includes(event.key)) {
    // color = nextColor();
    // $('#clock').css("background", color);
    nextColor('body');
  } else if (others.includes(event.key)) {
    // color = nextColor();
    // $('#date').css("background", color);
    nextColor('#date');
  } else if (event.key === "w") {
    getEmote('#date');
    // $('#date').text(emote).show().fadeOut(2000);
  } else if (event.key === "k") {
    $('#date').text('( ˘ ³˘)♥').show().fadeOut(2000);
  } else if (event.key = "l") {
    // $('#lil-guy').text(emote).show().fadeOut(2000);
    getEmote('#lil-guy');
  }
});





const nextColor = function nextColor(id) {
  hexChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  firstColor = '#';
  secondColor = '#';
  for(let i=0; i < 6; i++) {
    firstColor += (hexChars[Math.floor(Math.random()*hexChars.length)]);
    secondColor += (hexChars[Math.floor(Math.random()*hexChars.length)]);
  }
  const degrees = Math.floor(Math.random()* 360);
  const percentage = Math.floor(Math.random()*90);
  return updateGradient(degrees, percentage, firstColor, secondColor, id);
};

const updateDegrees = function updateDegrees(deg, percentage, firstColor, secondColor, id) {
  let degrees = deg
  if (deg < 360) {
    degrees = deg + 100
  } else if (deg >= 360) {
    degrees = 0
  }
  console.log('hi im degrees trust')
  const  color = `linear-gradient(${degrees}deg, ${firstColor}, ${firstColor} ${percentage}%, ${secondColor})`;
  console.log(`update degrees the color is ${color}`);
  $(`${id}`).css('background', color);
};


const updateGradient = function updateGradient(deg, percentage, firstColor, secondColor, id) {
  const degrees = deg;
  const color = `linear-gradient(${degrees}deg, ${firstColor}, ${firstColor} ${percentage}%, ${secondColor})`;
  console.log(`update gradient the deg is ${deg} the degrees is ${degrees}`);
  $(`${id}`).css('background', color);

  // setInterval(updateDegrees(degrees, percentage, firstColor, secondColor, id), 1000);
};


$('li').click(function(event){
  console.log('Got a click on an <li> element!');
  $(this).toggleClass('blue');
  console.log(this);
});
