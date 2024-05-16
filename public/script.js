const bulb = document.getElementById('bulb');
const moj = document.querySelector('.moj');
const onBtn = document.getElementById('onBtn');
const offBtn = document.getElementById('offBtn');

let isOn = false;

function turnOn() {
  isOn = true;
  bulb.style.backgroundColor = '#f2f200';
  moj.style.backgroundColor =  '#ffffff'
}

function turnOff() {
  isOn = false;
  bulb.style.backgroundColor = '#f0f0f0';
  moj.style.backgroundColor =  '#89eccc'
}


onBtn.addEventListener('click', turnOn);
offBtn.addEventListener('click', turnOff);
