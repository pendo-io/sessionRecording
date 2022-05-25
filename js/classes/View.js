class View extends BaseElement {
    constructor(json) {
        super(json);
    }

    createElement() {
        this.element = document.createElement('div');
        this.element.style.display = 'flex'
        return super.createElement();
    }
}