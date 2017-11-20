const seconds = 1000;
const extraZero = num => `0${num}`.slice(-2);

const coolClock = () => {
  let currentTime = new Date();

  const date = currentTime.toDateString();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const message = (time) => {
    if (time > 21 || time < 6) {
      return 'Go to bed Chris!';
    } else if (time < 12) {
      return 'Good Morning Chris';
    } else if (time < 17) {
      return 'Good Afternoon Chris';
    }
    return 'Good Evening Chris';
  };

  const currentMessage = `<p class="message">${message(hour)}</p>`;
  const currentDate = `<p class="date">${date}</p>`;
  currentTime = `<p>${extraZero(hour)}:${extraZero(minute)}:<span class="second">${extraZero(second)}</span></p>`;

  const displayClock = document.getElementById('clock');
  displayClock.innerHTML = currentMessage + currentDate + currentTime;
};

setInterval(coolClock, seconds);
