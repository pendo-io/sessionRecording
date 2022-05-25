// import BaseElement from "./BaseElement";
class Image extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('img');
      super.createElement();

      this.element.style.marginLeft = '0px';
      this.element.style.marginRight = '0px';
      this.element.src = "data:image/png;base64, " + this.json.image;
  }
}