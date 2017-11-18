
$(document).ready(()=>{
  const clock = function clock() {
      let date = new Date();
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let m = 'M';

      m = (hours < 12) ? 'A'+m : 'P' + m;
      hours = (hours === 0 ) ? 12 : hours;
      hours = (hours > 12) ?  hours - 12 : hours;
      // hours = (hours < 10) ? '0' + hours : hours;
      // hours = (hours < 10) ? '0' + hours : hours;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      let time =  hours + ':'+ minutes + ':' + seconds + m;
      document.getElementById('clock').innerText = time;
    };
    clock();
    setInterval(clock, 1000);

    $('#clock').append(clock());

  });
