const seconds = 1000;

const extraZero = num => `0${num}`.slice(-2);

const coolClock = () => {
  let currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  currentTime = `${extraZero(hour)}:${extraZero(minute)}:${extraZero(second)}`;

  const displayClock = document.getElementById('clock');
  displayClock.innerHTML = currentTime;
};

setInterval(coolClock, seconds);
