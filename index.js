$(document).ready(()=>{
  setInterval(clock, 1000);
})

const clock = function clock(){
  let today = new Date();
  let locale = today.toLocaleTimeString('ko-KR', { hour12: false});
  document.getElementById('clock').innerHTML = '시애틀 시간은 한국어로<br>' + locale;
  // 시애틀 시간은 한국으로 translates to "Seattle's time in Korean"
};
