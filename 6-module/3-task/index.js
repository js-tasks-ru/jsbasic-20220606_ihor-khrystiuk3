import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render(slides);
    this.initCarousel();
    this.elem.addEventListener('click', event => this.addToCart(event));
  }

  render(slides) {
    let carouselItems = '';
    slides.forEach(slide => {
      carouselItems += `
        <div class="carousel__slide" data-id=${slide.id}>
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;
    });

    let carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">${carouselItems}</div>
      </div>
    `);

    return carousel;
  }

  initCarousel() {
    const nextBtn = this.elem.querySelector('.carousel__arrow_right');
    const prevBtn = this.elem.querySelector('.carousel__arrow_left');
    const slides = this.elem.querySelectorAll('.carousel__slide');
    const slidesContainer = this.elem.querySelector('.carousel__inner');
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

  addToCart(event) {
    if (event.target.closest('.carousel__button')) {
      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: event.target.closest('.carousel__slide').dataset.id,
        bubbles: true
      }));
    }
  }
}
