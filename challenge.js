const counter = document.getElementById('counter');
const upSecond = document.getElementById('+');
const downSecond = document.getElementById('-');

addSecond = () => {
  currentSecond = (document.getElementById('counter').innerText) * 1;
  newSecond = currentSecond += 1;
  counter.innerText = newSecond.toString();
}

removeSecond = () => {
  currentSecond = (document.getElementById('counter').innerText) * 1;
  newSecond = currentSecond -= 1;
  counter.innerText = newSecond.toString();
}

upSecond.addEventListener('click', addSecond);
downSecond.addEventListener('click', removeSecond);

startTimer = () => {
  setInterval(addSecond, 1000);
}

startTimer();
