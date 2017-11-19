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
// function addZero(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }
//
// $(document).ready(function() {
//   let d = new Date();
//   let h = addZero(d.getHours());
//   let m = addZero(d.getMinutes());
//   let s = addZero(d.getSeconds());
//   let t = (h + ':' + m + ':' + s);
//   $('#clock').append(t);
// })

//
// Your code here
// const setDate = function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();
//   const mins = now.getMinutes();
//   const hour = now.getHours();
//
//   setInterval(setDate, 1000);
// });

// $(document).ready(function() {
//
//   const setDate = function(setDate() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const mins = now.getMinutes();
//     const hour = now.getHours();
//     const date = seconds + mins + hour;
//     // setInterval(setDate, 1000);
//   });
//
//     $('#clock').append(date;
//   });

// });

// $(document).ready(function ()) {
//   $('#clock').append("hi there");
// }
//
// $(document).ready(function() {

// (hours + ":" + minutes + ":" + seconds + meridiem);
// </script>

// $(document).ready(function() {
//   let interval = setInterval(myTimer, delay[1000]);
//
//   function myTimer() {
//     let d = new Date();
//     let t = d.getSeconds();
//   }
//   // let d = new Date();
//   // let h = d.getHours();
//   // let m = d.getMinutes();
//   // let s = d.getSeconds();
//   // let t = h + ':' + m + ':' + s;
//   $('#clock').append(interval);
//
// });



function clock() {

//Save the times in variables

var today = new Date();

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();


//Set the AM or PM time

if (hours >= 12){
  meridiem = " PM";
}
else {
  meridiem = " AM";
}


//convert hours to 12 hour format and put 0 in front
if (hours>12){
	hours = hours - 12;
}
else if (hours===0){
	hours = 12;
}

//Put 0 in front of single digit minutes and seconds

if (minutes<10){
	minutes = "0" + minutes;
}
else {
	minutes = minutes;
}

if (seconds<10){
	seconds = "0" + seconds;
}
else {
	seconds = seconds;
}

document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);

} //ends clock function

console.log("outside the function")

setInterval('clock()', 1000);
