// Your code here

const time = function time() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const timeNow = `${hour} : ${minute} : ${second}`;
  return timeNow;
}
