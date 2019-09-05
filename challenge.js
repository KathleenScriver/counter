const counter = document.getElementById('counter');

myTimer = () => {
  currentSecond = (document.getElementById('counter').innerText) * 1;
  newSecond = currentSecond += 1;
  counter.innerText = newSecond.toString();
}

startTimer = () => {
  setInterval(myTimer, 1000);
}

startTimer();
