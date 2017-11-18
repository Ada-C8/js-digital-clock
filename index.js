$(document).ready(() => {
  const displayClock = function displayClock() {
    return new Date(Date.now()).toLocaleTimeString();
  };
  window.setInterval(() => { $('#clock').html(displayClock()); }, 1000);
});
