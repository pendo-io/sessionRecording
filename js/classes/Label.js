// import BaseElement from "./BaseElement";
class Label extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('span');
      this.element.innerText = this.json.text;
      return super.createElement();
  }
}