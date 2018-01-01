const root = document.documentElement;
const inputElements = Array.from(document.querySelectorAll('input'));

function getVal(element) {
  return element.value;
}

function getAttributeName(el) {
  return el.getAttribute('name');
}

function calcBlur(inputVal) {
  let blurVal =  inputVal * 0.2; // 0.2 used to scale blur input val to px val
  return blurVal;
}

function setSpacingProperty(inputVal) {
  return root.style.setProperty('--spacing', `${inputVal}px`);
}

function setBlurProperty(inputVal) {
  let blurVal = calcBlur(inputVal);
  root.style.setProperty('--blur', `${blurVal}px`);
}

function setBaseProperty(inputVal) {
  return root.style.setProperty('--base', `${inputVal}`);
}

function setVal() {
  let inputVal = getVal(this);
  let attributeName = getAttributeName(this);

  if (attributeName === 'spacing') { setSpacingProperty(inputVal) }
  if (attributeName === 'blur') { setBlurProperty(inputVal) }
  if (attributeName === 'base') { setBaseProperty(inputVal) }
}

inputElements.forEach(el => el.addEventListener('input', setVal));
