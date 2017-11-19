
// Update your clock to show the full date with the day of the week, and the month, day and year


function clock() {
let time = new Date();
let h = time.getHours() % 12 || 12;
let m = time.getMinutes();
let s = time.getSeconds();
let day = time.getDay();
let month = time.getMonth();
let weekDay = time.get
let year = time.getYear();
)

// day of the week
// month
// day
// year

document.querySelectorAll('.clock')[0].innerHTML = placeHolder(h) + ":" + placeHolder(m) + ":" + placeHolder(s);

function placeHolder(num) {
  if (num < 10) {
    num = '0' + num
  }
  return num;
 }
}

setInterval(clock, 1000);
