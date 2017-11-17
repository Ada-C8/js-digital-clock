// Your code here
console.log('hello');


// $('#clock').append('<h2> Hello World! </h2>');


const updateClock = function updateClock() {
  let currentTime = new Date ( );
  let currentHours = currentTime.getHours ( );
  // if (currentHours > 12) {
  //   currentHours = currentHours - 12;
  // };

  let currentMinutes = currentTime.getMinutes ( );
  if (currentMinutes < 10) {
    currentMinutes = '0' + currentMinutes;
  };

  let currentSeconds = currentTime.getSeconds ( );
  if (currentSeconds < 10) {
    currentSeconds = '0' + currentSeconds;
  };

  let time = currentHours + ':' + currentMinutes + ':' + currentSeconds
  return time;
};
//
// const ellapsedTime = function ellapsedTime() {
//   let currentTime = new Date ( );
//   const party = new Date(Date.UTC(2009, 6, 28, 12, 0));
//   let difference = currentTime - party;
//   let partyHours = difference.getHours ( );
//   let partyMinutes = difference.getMinutes ( );
//   let partySeconds = difference.getSeconds ( );
//   let timeToParty = partyHours + ':' + partyMinutes + ':' + partySeconds;
//
//   return timeToParty
//
//
//
// }




$('document').ready(() => {
  setInterval(function() {
    $('#clock').text(updateClock, 1000);
  })
  //  $('#clock').append(ellapsedTime);
});


  // $('document').ready(() => {
  //   $('#clock').append(updateClock);
  //   $('#clock').setInterval;
  // });
