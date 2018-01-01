const root = document.documentElement;
const base = document.querySelector('#base');
const spacing = document.querySelector('#spacing');
const blur = document.querySelector('#blur');

function getVal(element) {
  return element.value;
}

function calcBlur(inputVal) {
  let blurVal =  inputVal * 0.2; // 0.2 used to scale blur input val to px val
  return blurVal;
}

function calcSpacing(inputVal) {
  let spacingVal = inputVal * 0.5; // 0.5 used to scale spacing input val to px val
  return spacingVal;
}

spacing.addEventListener('input', () => {
  let inputVal = getVal(spacing);
  let spacingVal = calcSpacing(inputVal);
  root.style.setProperty('--spacing', `${spacingVal}px`);
});

blur.addEventListener('input', () => {
  let inputVal = getVal(blur);
  let blurVal = calcBlur(inputVal);
  root.style.setProperty('--blur', `${blurVal}px`);
})

base.addEventListener('input', () => {
  let inputVal = getVal(base);
  root.style.setProperty('--base-color', `${inputVal}`)
});
