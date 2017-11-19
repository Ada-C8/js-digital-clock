// Your code here
const myClock = () => {
  let date = new Date();
  let timeString = date.toLocaleTimeString();
  const timeOptions = {
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
  };
  // document.getElementById('local').innerHTML = date.toLocaleTimeString();
  $('.clock').html(`<p> ${timeString} <p>`);
  timeOptions.timeZone = 'Asia/Seoul';
  const seoulTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  $('#seoul').html(`<p> Current Time in Seoul, South Korea: ${seoulTime} <p>`);

  timeOptions.timeZone = 'Europe/Berlin';
  const berlinTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  $('#berlin').html(`<p> Current Time in Berlin, Germany: ${berlinTime} <p>`);

  timeOptions.timeZone = 'America/Lima';
  const limaTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  $('#lima').html(`<p> Current Time in Lima, Peru: ${limaTime} <p>`);

};
// const display = setInterval(myClock, 1000);

// const fixTime = function fixTime(i) {
//   if (i < 10) {
//     i = '0' + i;
//   }
//   return i;
// };

// const myClock = function myClock() {
//   let now = new Date();
//   let h = now.getHours();
//   let m = now.getMinutes();
//   let s = now.getSeconds();
//   h = fixTime(h);
//   m = fixTime(m);
//   s = fixTime(s);
//   document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
// };


const display = setInterval(myClock, 1000);


// $(.clock).ready(function() {
//   for (let i = 0; i < $(.clock).length ; i++) {
//     let listItem = $('<li>' + i + '</li>');
//     $('.dynamic-list').append(listItem);
//   }
// });

// below are display options, do not fetch the actual time in those places unless a timezone is provided
// const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
//
// const timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true } ;
//
// timeOptions.timeZone =

// must manually add timeZone to Options;

// const date = new Date();
//
// const dateKorea = new Intl.DateTimeFormat('ko-KR', dateOptions).format(date);
//
// const timeKorea = new Intl.DateTimeFormat('ko-KR', timeOptions).format(date);

// Seoul: UTC/GMT +9 hours, 17 hours ahead of Seattle timeZone = 'Asia/Seoul'
// Berlin: UTC/GMT +1 hour, 9 hours ahead of Seattle timeZone = 'Europe/Berlin'
//Peru:  timeZone = 'America/Lima';
// Marrakech: timeZone = 'Africa/Casablanca'
// https://time.is/Marrakesh
