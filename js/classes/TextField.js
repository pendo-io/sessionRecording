// import BaseElement from "./BaseElement";
class TextField extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('input');
      this.element.type = 'text';
      super.createElement();
  }
}