$(document).ready(function() {
  const digital = function digital() {
    const time = new Date();
    let hours = time.getHours().toString().length === 1 ? `0${time.getHours()}` : `${time.getHours()}`;
    let minutes = time.getMinutes().toString().length === 1 ? `0${time.getMinutes()}` : `${time.getMinutes()}`;
    let seconds = time.getSeconds().toString().length === 1 ? `0${time.getSeconds()}` : `${time.getSeconds()}`;
    let clock = `${hours} : ${minutes} : ${seconds}`;
$('#clock').text(clock)
}

setInterval(digital, 1000);
});
