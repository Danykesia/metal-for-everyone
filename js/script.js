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

// Albums released carousel
// Dragging controls
const albumsCarousel = document.querySelector('.albums-carousel');

let isDragStart = false,
  prevPageX, prevScrollLeft;

const dragStart = (e) => {
  // updating global variables value on mouse down left
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = albumsCarousel.scrollLeft;
}

const dragStop = (e) => {
  isDragStart = false;
}

const dragging = (e) => {
  // scrolling cards to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  albumsCarousel.scrollLeft = prevScrollLeft - positionDiff;
}

albumsCarousel.addEventListener('mousedown', dragStart);
albumsCarousel.addEventListener('mousemove', dragging);
albumsCarousel.addEventListener('mouseup', dragStop);

// Arrows controls
const albumsCarouselAll = [...document.querySelectorAll('.albums-carousel')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

albumsCarouselAll.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })
})