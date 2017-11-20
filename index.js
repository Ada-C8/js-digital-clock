// Your code here
// new Date(year, month, date, hours, minutes, seconds, milliseconds);
console.log(new Date());

// .toLocaleTimeString - converts time to readable string
// .toLocaleDateString() - converts date to readable string

function display_clock() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // let day = time.getDay();
  // let month = time.getMonth();
  // let year = time.getYear();

  $(document).ready(()=>{
    // BUG: when single digit, does not display 0, (i.e 19 : 27 : 2 instead of 19 : 27 : 02)
    $('#clock').text(`${hours} : ${minutes} : ${seconds}`);
    // $('#date').text(`${month} ${day}, ${year}`);
    $('#date').text(time.toLocaleDateString())
  });
}
setInterval(display_clock, 1000);
