// Infinity banner carousel
const bannerSlider = document.querySelector('.banner-slider');
const bannerCarousel = document.querySelector('.banner-carousel')

const bannerArrowLeft = document.querySelector('#banner-arrow-left');
const bannerArrowRight = document.querySelector('#banner-arrow-right');

let direction = -1;

bannerArrowLeft.addEventListener('click', () => {
  if (direction === -1) {
    bannerSlider.appendChild(bannerSlider.firstElementChild);
    direction = 1;
  };

  bannerCarousel.style.justifyContent = 'flex-end'
  console.log(direction)
  bannerSlider.style.transform = 'translate(25%)';
});

bannerArrowRight.addEventListener('click', () => {
  if (direction === 1) {
    bannerSlider.prepend(bannerSlider.lastElementChild);
    direction = -1;
  }
  bannerCarousel.style.justifyContent = 'flex-start'
  console.log(direction)
  bannerSlider.style.transform = 'translate(-25%)';
});

bannerSlider.addEventListener('transitionend', () => {
  if (direction === -1) {
    bannerSlider.appendChild(bannerSlider.firstElementChild);
  } else if (direction === 1) {
    bannerSlider.prepend(bannerSlider.lastElementChild);
  }

  bannerSlider.style.transition = 'none';
  bannerSlider.style.transform = 'translate(0)';

  setTimeout(() => {
    bannerSlider.style.transition = 'all .5s';
  });
});