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

  $(document).ready(()=>{
    $('#clock').text(`${hours} : ${minutes} : ${seconds}`);
  });
}
setInterval(display_clock, 1000);
