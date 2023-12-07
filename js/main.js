const image = document.getElementById('image');
const form = document.getElementById('filters-form');

form.addEventListener('input', () => {
  const grayscaleValue = document.getElementById('grayscale').value;
  const sepiaValue = document.getElementById('sepia').value;
  const blurValue = document.getElementById('blur').value;
  const invertValue = document.getElementById('invert').value;
  const opacityValue = document.getElementById('opacity').value;
  const brightnessValue = document.getElementById('brightness').value;
  const contrastValue = document.getElementById('contrast').value;
  const saturateValue = document.getElementById('saturate').value;

  image.style.filter = `
    grayscale(${grayscaleValue}%)
    sepia(${sepiaValue}%)
    blur(${blurValue}px)
    invert(${invertValue}%)
    opacity(${opacityValue / 100})
    brightness(${brightnessValue}%)
    contrast(${contrastValue}%)
    saturate(${saturateValue}%)`;
});
