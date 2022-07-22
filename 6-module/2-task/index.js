import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.elem = this.render(product);
    this.elem.addEventListener('click', event => this.addToCart(event));
  }

  render(data) {
    const product = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${data.image}" class="card__image" alt="product">
          <span class="card__price">€${data.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${data.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
    return product;
  }

  addToCart(event) {
    if (event.target.closest('.card__button')) {
      this.elem.dispatchEvent(new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true
      }));
    }
  }
}
