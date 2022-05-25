class BaseElement {
    constructor(json) {
        this.json = json;
        this.element = null;
    }

    createElement() {
        this.element.setAttribute("type",  this.json.type);
        this.addPosition();
        this.addFont();
        this.addMargin();
        this.addPadding();
        this.addBorder();
        this.addBackground();
        if (this.json.text) {
            this.element.innerText = this.json.text;
        }
        this.element.style.display = 'flex'
        return this.element;
    }

    addBackground() {
        if (this.json.bgColor) {
            this.element.style.backgroundColor = "#" + this.json.bgColor;
        }
    }

    addFont() {
        this.element.style.fontFamily = this.json.fontFamily || this.json.fontName || '-apple-system, BlinkMacSystemFont, sans-serif;';
        this.element.style.fontStyle = this.json.fontStyle || 'normal';
        this.element.style.color = "#" + this.json.fontColor;
        if (this.json.fontSize) {
            this.element.style.fontSize = Math.trunc(this.json.fontSize * sizeFactor) + 'px';
        }

        this.element.style.fontWeight = this.json.fontWeight || 'normal';
        let align = 'center';
        if (this.json.alignment) {
            switch (this.json.alignment) {
                case "left":
                    align = 'flex-start';
                    break;
                case "right":
                    align = 'flex-end';
                    break;
                case "natural":
                    align = 'inherit';
                    break;
                default:
                    break;
            }
        }
        this.element.style.justifyContent = align;
        this.element.style.alignItems = 'center';
    }

    addPosition() {
        if (this.json.frame) {
            this.element.style.position = 'absolute';
            this.element.style.top = Math.trunc(this.json.frame.y * sizeFactor) + 'px';
            this.element.style.left = Math.trunc(this.json.frame.x * sizeFactor) + 'px';
            if(this.json.frame.width > 0) {
                this.element.style.width = Math.trunc(this.json.frame.width * sizeFactor) + 'px';
            }
            if(this.json.frame.height > 0) {
                this.element.style.height = Math.trunc(this.json.frame.height * sizeFactor) + 'px';
            }
        }
    }

    addMargin() {
        if (this.json.margin) {
            this.element.style.marginTop = Math.trunc(this.json.margin.top * sizeFactor) + 'px';
            this.element.style.marginLeft = Math.trunc(this.json.margin.left * sizeFactor) + 'px';
            this.element.style.marginBottom = Math.trunc(this.json.margin.bottom * sizeFactor) + 'px';
            this.element.style.marginRight = Math.trunc(this.json.margin.right * sizeFactor) + 'px';
        }
    }

    addPadding() {
        if (this.json.padding) {
            this.element.style.paddingTop = Math.trunc(this.json.padding.top * sizeFactor) + 'px';
            this.element.style.paddingLeft = Math.trunc(this.json.padding.left * sizeFactor) + 'px';
            this.element.style.paddingBottom = Math.trunc(this.json.padding.bottom * sizeFactor) + 'px';
            this.element.style.paddingRight = Math.trunc(this.json.padding.right * sizeFactor) + 'px';
        }
    }

    addBorder() {
        if (this.json.borderWidth && this.json.borderWidth > 0) {
            this.element.style.borderWidth = Math.trunc(this.json.borderWidth * sizeFactor) + 'px';
            this.element.style.borderColor = "#" + (this.json.borderColor || "000000");
            this.element.style.borderStyle = "solid";
        }
        if (this.json.cornerRadius && this.json.cornerRadius > 0) {
            this.element.style.borderRadius = Math.trunc(this.json.cornerRadius * sizeFactor) + 'px';
        }
    }

    getElement() {
        return this.element;
    }
}