const root = document.documentElement;
const inputs = Array.from(document.querySelectorAll('.controls input'));

function setVal() {
  let suffix = this.dataset.sizing || '';
  let inputVal = this.value + suffix;
  let name = this.name;

  root.style.setProperty(`--${name}`, `${inputVal}`)
}

inputs.forEach(el => el.addEventListener('input', setVal));
