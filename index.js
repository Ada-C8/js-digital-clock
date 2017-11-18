class DisplayClock {
  static displayTime() {
    return new Date(Date.now()).toLocaleTimeString('en-US');
  }
  static displayDate() {
    return new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  }
}
$(document).ready(() => {
  window.setInterval(() => {
    $('#date').html(DisplayClock.displayDate());
    $('#clock').html(DisplayClock.displayTime());
  }, 1000);
});
