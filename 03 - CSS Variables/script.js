const spacing = document.querySelector('#spacing');
const root = document.documentElement;

base.addEventListener('input', () => {
  let currentColor = base.value;
  root.style.setProperty('--base-color', `${currentColor}`)
});
