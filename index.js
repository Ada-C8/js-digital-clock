// Your code here
const myClock = () => {
  let date = new Date();
  let timeString = date.toLocaleTimeString();
  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateString = new Intl.DateTimeFormat('en-US', dateOptions).format(date)
  const timeOptions = {
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
  };
  $('.clock').html(`<p> ${timeString} <p><p id= 'date'> ${dateString} <p>`);

};

const display = setInterval(myClock, 1000);


// Optional Enhancements- to be continued.. Notes Below

// *****Other locations**********
  // timeOptions.timeZone = 'Asia/Seoul';
  // const seoulTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  // $('#seoul').html(`<p> Current Time in Seoul, South Korea: ${seoulTime} <p>`);
  //
  // timeOptions.timeZone = 'Europe/Berlin';
  // const berlinTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  // $('#berlin').html(`<p> Current Time in Berlin, Germany: ${berlinTime} <p>`);
  //
  // timeOptions.timeZone = 'America/Lima';
  // const limaTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
  // $('#lima').html(`<p> Current Time in Lima, Peru: ${limaTime} <p>`);

// Alternative Function
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

// Date options
  // const dateOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  // https://time.is/Marrakesh
