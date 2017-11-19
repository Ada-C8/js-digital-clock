// Your code here
const myClock = () => {
  let date = new Date();
  let timeString = date.toLocaleTimeString();
  document.getElementById('clock').innerHTML = date.toLocaleTimeString();
  $('.clock').html(`<p> ${timeString} <p>`);
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


// below are display options, do not fetch the actual time in those places unless a timezone is provided
const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };

const timeOptions = {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true } ;

// must manually add timeZone to Options;

const date = new Date();

const dateKorea = new Intl.DateTimeFormat('ko-KR', dateOptions).format(date);

const timeKorea = new Intl.DateTimeFormat('ko-KR', timeOptions).format(date);

// Seoul: UTC/GMT +9 hours, 17 hours ahead of Seattle timeZone = 'Asia/Seoul'
// Berlin: UTC/GMT +1 hour, 9 hours ahead of Seattle timeZone = 'Europe/Berlin'
//Peru:  timeZone = 'America/Lima';
// Marrakech: timeZone = 'Africa/Casablanca'
// https://time.is/Marrakesh
