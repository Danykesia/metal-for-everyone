const slider = document.querySelector('.slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

let sectionIndex = 0;

leftArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
  slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
  const teste = slider.style.transform;

  console.log(teste)
  console.log(sectionIndex)
});
rightArrow.addEventListener('click', () => {
  sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3
  slider.style.transform = 'translate(' + sectionIndex * -25 + '%)';
  const teste = slider.style.transform;

  console.log(teste)
  console.log(sectionIndex)
});