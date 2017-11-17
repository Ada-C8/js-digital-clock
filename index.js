// Your code here

const time = function time() {
  const date = new Date();
  hour = date.getHours()
  minute = date.getMinutes()
  second = date.getSeconds()
  timeNow = `${hour} : ${minute} : ${second}`;
}

console.log(time());
