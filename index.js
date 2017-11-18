// Your code here

const date = document.getElementById('date');
const time = document.getElementById('time');

function getDate() {
  date.innerHTML = Date.today().toString('MMMM d, yyyy');
}

function timer() {
  const d = new Date();
  setInterval(timer, 1000);
  time.innerHTML = d.toLocaleTimeString();
}

getDate();
timer();

// NOTES:
// setInterval(function name, frequency 1000ms = 1 second);
