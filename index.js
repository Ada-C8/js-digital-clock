
$(document).ready(() => {
  const readTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    let hours = now.getHours();
    let m = 'AM';

    if (hours > 12) {
      m = 'PM';
      hours -= 12;
    }

    return `<p>${hours}:${minutes}:${seconds} ${m}</p>`;
  };

  setInterval(() => {
    $('#clock').empty();
    $('#clock').append(readTime);
  }, 1000);
});
