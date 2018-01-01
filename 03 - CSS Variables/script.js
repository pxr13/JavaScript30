const spacing = document.querySelector('#spacing');
const base = document.querySelector('#base')

base.addEventListener('input', () => {
  console.log(base.value);
});

// as base color value changes, change img-background color and 'JS'
