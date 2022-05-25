// import BaseElement from "./BaseElement";
class Button extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('button');
      this.element.innerText = this.json.text;
      return super.createElement();
  }
}