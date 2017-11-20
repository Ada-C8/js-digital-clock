
// Update your clock to show the full date with the day of the week, and the month, day and year
$(document).ready(function() {

  function placeHolder(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

  function clock() {
    let time = new Date();
    let h = time.getHours() % 12 || 12;
    let m = time.getMinutes();
    let s = time.getSeconds();

    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = monthsArray[time.getMonth()];

    let date = time.getDate();
    let year = time.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayName = days[time.getDay()];

    let text = `It is ${ dayName } <br> ${month} ${date}, ${year} <br> The time is ` + placeHolder(h) + ":" + placeHolder(m) + ":" + placeHolder(s);

    $('.clock').html(text);

// I found this online, and was not really sure everything that it did...
    // document.querySelectorAll('.clock')[0].innerHTML = placeHolder(h) + ":" + placeHolder(m) + ":" + placeHolder(s);
  }

  setInterval(clock, 1000);

});
