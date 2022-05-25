// import BaseElement from "./BaseElement";
class Label extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('span');
      super.createElement();
      this.element.style.flex = '1';
      this.element.style.backgroundColor = null;
  }
}