// import BaseElement from "./BaseElement";
class Label extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('span');
      this.element.style.display = 'flex';
      if(this.json.text) {
          this.element.innerText = this.json.text;
      }
      return super.createElement();
  }
}