export default class Section {
    constructor({ renderer }, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }
  
    drawElement(initialCards) {
      initialCards.forEach((card) => {
        this._renderer(card)
      })
    }
  
    addItem(card) {
      this._container.prepend(card)
    }
}