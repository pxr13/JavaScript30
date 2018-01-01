const root = document.documentElement;
const base = document.querySelector('#base');
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');

function getValue(element) {
  return element.value;
}

function calcBlur(inputVal) {
  let blurVal =  inputVal * 0.2; // 0.2 used to scale blur val in px
  return blurVal;
}

base.addEventListener('input', () => {
  let currentVal = getValue(base);
  root.style.setProperty('--base-color', `${currentVal}`)
});

blur.addEventListener('input', () => {
  let inputVal = getValue(blur);
  let blurVal = calcBlur(inputVal);
  root.style.setProperty('--blur', `blur(${blurVal}px)`);
})
