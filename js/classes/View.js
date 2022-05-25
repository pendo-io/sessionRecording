class View extends BaseElement {
    constructor(json) {
        super(json);
    }

    createElement() {
        this.element = document.createElement('div');
        super.createElement();
        // this.element.style.display = 'flex'
    }
}