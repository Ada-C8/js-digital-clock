// Your code here

$(document).ready(()=>{
  clock();
})

const clock = function clock(){
  let d = new Date();
  let local = d.toLocaleTimeString();
  document.getElementById('clock').innerHTML=local;
};

setInterval(function(){clock()}, 1000);
