export default class Section {
    constructor({ data, renderer }, selector) {
      this.initialCards = data;
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }
  
    drawElement() {
      this.initialCards.forEach((card) => {
        this._renderer(card)
      })
    }
  
    addItem(card) {
      this._container.prepend(card)
    }
}