// import BaseElement from "./BaseElement";
class Label extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('span');
      super.createElement();
      // this.element.style.display = 'inline';
      if(this.json.text) {
          this.element.innerText = this.json.text;
      }
      this.element.style.backgroundColor = null;

  }
}