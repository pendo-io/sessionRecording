// import BaseElement from "./BaseElement";
class Button extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('div');
      super.createElement();
      this.element.style.cursor = 'pointer'
  }
}