export default class Section {
    constructor({ items, renderer }, selector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(selector);
    }
  
    drawElement() {
      items.forEach((userInfo) => {
        this._renderer(userInfo)
      })
    }
  
    addItem(elementCard) {
      this._container.prepend(elementCard)
    }
}