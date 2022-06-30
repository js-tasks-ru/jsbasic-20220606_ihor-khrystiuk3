function initCarousel() {
  const nextBtn = document.querySelector('.carousel__arrow_right');
  const prevBtn = document.querySelector('.carousel__arrow_left');
  const slides = document.querySelectorAll('.carousel__slide');
  const slidesContainer = document.querySelector('.carousel__inner');
  let currentSlide = 0;
  let maxSlide = slides.length - 1;

  if (currentSlide === 0) {
    prevBtn.style.display = 'none';
  }

  prevBtn.addEventListener('click', function () {
    currentSlide--;
    slidesContainer.style.transform = `translateX(-${slidesContainer.offsetWidth * currentSlide}px)`;
    if (currentSlide === 0) {
      prevBtn.style.display = 'none';
    }
  });

  nextBtn.addEventListener('click', function () {
    currentSlide++;
    slidesContainer.style.transform = `translateX(-${slidesContainer.offsetWidth * currentSlide}px)`;
    if (currentSlide === maxSlide) {
      nextBtn.style.display = 'none';
    } else {
      prevBtn.style.display = '';
    }
  });
}
