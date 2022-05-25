class BaseElement {
    constructor(json) {
        this.json = json;
        this.element = null;
    }

    createElement() {
        this.addPosition();
        this.addFont();
        this.addMargin();
        this.addPadding();
        this.addBorder();
        this.addBackground();
        return this.element;
    }

    addBackground() {
        if(this.json.bgColor) {
            this.element.style.backgroundColor = "#" + this.json.bgColor;
        }
    }

    addFont() {
        this.element.style.fontFamily = this.json.fontFamily || this.json.fontName || '-apple-system, BlinkMacSystemFont, sans-serif;';
        this.element.style.fontStyle = this.json.fontStyle || 'normal';
        this.element.style.color = "#" + this.json.fontColor;
        this.element.style.fontSize = this.json.fontSize + 'px';
        this.element.style.fontWeight = this.json.fontWeight || 'normal';
        this.element.style.justifyContent = this.json.alignment && this.json.alignment !== 'natural' ? this.json.alignment : 'center';
        this.element.style.alignItems = this.json.alignment && this.json.alignment !== 'natural' ? this.json.alignment : 'center';
    }

    addPosition() {
        if (this.json.frame) {
            console.warn(this.json.frame);
            this.element.style.position = 'absolute';
            this.element.style.top = Math.trunc(this.json.frame.y) + 'px';
            this.element.style.left = Math.trunc(this.json.frame.x) + 'px';
            this.element.style.width = Math.trunc(this.json.frame.width) + 'px';
            this.element.style.height = Math.trunc(this.json.frame.height) + 'px';

            console.warn('style: ' + this.element.style.top);
        }
    }

    addMargin() {
        if (this.json.margin) {
            this.element.style.marginTop = Math.trunc(this.json.margin.top) + 'px';
            this.element.style.marginLeft = Math.trunc(this.json.margin.left)  + 'px';
            this.element.style.marginBottom = Math.trunc(this.json.margin.bottom)  + 'px';
            this.element.style.marginRight = Math.trunc(this.json.margin.right)  + 'px';
        }
    }

    addPadding() {
        if (this.json.padding) {
            this.element.style.paddingTop = Math.trunc(this.json.padding.top)  + 'px';
            this.element.style.paddingLeft = Math.trunc(this.json.padding.left)  + 'px';
            this.element.style.paddingBottom = Math.trunc(this.json.padding.bottom)  + 'px';
            this.element.style.paddingRight = Math.trunc(this.json.padding.right) + 'px';
        }
    }

    addBorder() {
        if (this.json.borderWidth && this.json.borderWidth > 0) {
            this.element.style.borderWidth = this.json.borderWidth  + 'px';
            this.element.style.borderColor = "#" + (this.json.borderColor || "000000");
        }
        if(this.json.cornerRadius && this.json.cornerRadius > 0) {
            this.element.style.borderRadius = this.json.cornerRadius + 'px';
        }
    }

    getElement() {
        return this.element;
    }
}