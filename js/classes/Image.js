// import BaseElement from "./BaseElement";
class Image extends BaseElement {
  constructor(json) {
      super(json);
  }

  createElement() {
      this.element = document.createElement('img');
      super.createElement();
      console.warn(this.json.image);
      this.element.src = "data:image/png;base64, " + this.json.image;
  }
}