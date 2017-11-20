
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let timer = function timer () {
  let d = new Date();
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  let t = (h + ':' + m + ':' + s);
  $("#clock").html(t);
  // return t;
};

$(document).ready(function() {
  setInterval('timer()', 1000);
});

// this version users the function to show
// just the result
// $(document).ready(function() {
//   // $('#clock').append(timer());
// })
/* THE FOLLOWING WILL ADD
THE THING IN THE APPEND TO
THE PAGE */
// $(document).ready(function() {
//   console.log("Something");
//   $('#clock').append("SOMETHING");
// })

/*The Following will both add a time in a
not parsed format */
//
// $(document).ready(function() {
//   $('#clock').append( Date.now() );
// })

// $(document).ready(function() {
//   let d = Date.now();
//   $('#clock').append(d);
// })

/* This will put the current date in a parsed by LONG format */
// $(document).ready(function() {
//   let d = new Date();
//   let h = d.getHours();
//   console.log(h);
//   $('#clock').append(d);
// })

/* This is will put the time
formatted as a digital clock
except seconds is only 1 digit */

// $(document).ready(function() {
//   let d = new Date();
//   let h = d.getHours();
//   let m = d.getMinutes();
//   let s = d.getSeconds();
//   let t = (h + ':' + m + ':' + s);
//   $('#clock').append(t);
// })

/* This is will put the time
formatted as a digital clock
with seconds in two digits  */


// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

// $(document).ready(function() {
//   let d = new Date();
//   let h = addZero(d.getHours());
//   let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let t = (h + ':' + m + ':' + s);
//   $('#clock').append(t);
// })
