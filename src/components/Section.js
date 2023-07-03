export default class Section {
    constructor({ renderer }, selector) {
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }
  
    drawElement(initialCards) {
      initialCards.reverse()
      initialCards.forEach((card) => {
        this._container.prepend(this._renderer(card))
      })
    }
  
    addItem(card) {
      this._container.prepend(card)
    }
}