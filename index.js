let printTime = function printTime() {
  let date = new Date();

  $('#clock').html(timeString(date) + dateString(date));


};

let timeString = function timeString(date) {
  return `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)} <span id='seconds'>${('0' + date.getSeconds()).slice(-2)}</span>`;
};

let dateString = function dateString(date) {
  return `<p> ${date.toDateString()} </p>`
};



$(document).ready(() => {
  setInterval(printTime, 1000);

});
