
const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const changeImageSize = _.debounce(() => {
  const size = Number(slider.value) * 3;

  image.style.width = `${size}px`;
  image.style.height = `${size}px`;
}, 100);

slider.addEventListener('input', changeImageSize);

const field = document.querySelector('.field');
const box = document.querySelector('#box');

const moveBox = _.debounce(event => {
  const fieldRect = field.getBoundingClientRect();

  const x = event.clientX - fieldRect.left;
  const y = event.clientY - fieldRect.top;

  const maxX = field.clientWidth - box.offsetWidth;
  const maxY = field.clientHeight - box.offsetHeight;

  const left = Math.max(0, Math.min(x, maxX));
  const top = Math.max(0, Math.min(y, maxY));

  box.style.left = `${left}px`;
  box.style.top = `${top}px`;
}, 100);

field.addEventListener('mousemove', moveBox);
console.log(typeof _.debounce);