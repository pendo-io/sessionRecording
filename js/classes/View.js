class Div extends BaseElement {
    constructor(json) {
        super(json);
    }

    createElement() {
        this.element = document.createElement('div');
        return super.createElement();
    }
}