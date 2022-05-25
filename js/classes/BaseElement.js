class BaseElement {
  constructor(json) {
      this.json = json;
      this.element = null;
  }

  createElement() {
      this.addFont();
      this.addPosition();
      this.addMargin();
      this.addPadding();
      this.addBorder();
      return this.element;
  }

  addFont() {
      this.element.style.fontFamily = this.json.fontFamily;
      this.element.style.fontStyle = this.json.fontStyle || 'normal';
      this.element.style.color = this.json.fontColor;
      this.element.style.fontSize = this.json.fontSize;
      this.element.style.fontWeight = this.json.fontWeight || 'normal';
  }

  addPosition() {
      if (this.json.frame) {
          this.element.style.position = 'relative';
          this.element.style.top = this.json.frame.top + 'px';
          this.element.style.left = this.json.frame.left + 'px';
          this.element.style.width = this.json.frame.width + 'px';
          this.element.style.height = this.json.frame.height + 'px';
      }
  }

  addMargin() {
      if (this.json.margin) {
          this.element.style.marginTop = this.json.margin.top;
          this.element.style.marginLeft = this.json.margin.left;
          this.element.style.marginBottom = this.json.margin.bottom;
          this.element.style.marginRight = this.json.margin.right;
      }
  }

  addPadding() {
      if (this.json.padding) {
          this.element.style.paddingTop = this.json.padding.top;
          this.element.style.paddingLeft = this.json.padding.left;
          this.element.style.paddingBottom = this.json.padding.bottom;
          this.element.style.paddingRight = this.json.padding.right;
      }
  }

  addBorder() {
      if (this.json.borderWidth && this.json.borderWidth > 0) {
          this.element.style.borderWidth = this.json.borderWidth;
          this.element.style.borderColor = this.json.borderColor || "#000000";
      }
  }


  getElement() {
      return this.element;
  }
}