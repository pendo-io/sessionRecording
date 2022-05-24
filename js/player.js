let mainContent;

const createMainContent = () => {
    const container = document.getElementById('container');
    if (container !== null) {

        const image = document.createElement('img');
        image.setAttribute('src', './images/phone.svg');
        image.style.width = '600px'
        container.appendChild(image);

        //Main container
        mainContent = document.createElement('div');
        mainContent.style.position = 'absolute';
        mainContent.style.border = 'solid 1px black';
        mainContent.style.width = '390px';
        mainContent.style.height = '844px';
        mainContent.style.top = '75px';

        container.appendChild(mainContent);

        const json = [{
            "superClass": "NSObject",
            "margin": "{ top: 47.000000, left: 16.000000, bottom: 34.000000 , right: 16.000000 }",
            "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 844.000000 }",
            "borderColor": "000000",
            "bgColor": "000000",
            "type": "UILayoutContainerView",
            "views": [
                {
                    "superClass": "NSObject",
                    "margin": "{ top: 55.000000, left: 8.000000, bottom: 42.000000 , right: 8.000000 }",
                    "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 844.000000 }",
                    "borderColor": "000000",
                    "bgColor": "000000",
                    "type": "UINavigationTransitionView",
                    "views": [
                        {
                            "superClass": "NSObject",
                            "margin": "{ top: 55.000000, left: 8.000000, bottom: 42.000000 , right: 8.000000 }",
                            "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 844.000000 }",
                            "borderColor": "000000",
                            "bgColor": "000000",
                            "type": "UIViewControllerWrapperView",
                            "views": [
                                {
                                    "superClass": "NSObject",
                                    "margin": "{ top: 91.000000, left: 16.000000, bottom: 34.000000 , right: 16.000000 }",
                                    "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 844.000000 }",
                                    "borderColor": "000000",
                                    "bgColor": "ffffff",
                                    "type": "UIView",
                                    "views": [
                                        {
                                            "fontSize": 26,
                                            "superClass": "NSObject",
                                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                            "frame": "{ x: 62.000000, y: 232.000000, width: 302.000000 , height: 75.000000 }",
                                            "fontName": ".SFUI-Semibold",
                                            "text": "Hi there hows it going!?",
                                            "borderColor": "000000",
                                            "bgColor": "000000",
                                            "type": "UILabel",
                                            "views": []
                                        },
                                        {
                                            "superClass": "NSObject",
                                            "fontSize": 17,
                                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                            "frame": "{ x: 92.000000, y: 470.000000, width: 243.000000 , height: 130.000000 }",
                                            "fontName": ".SFUI-Regular",
                                            "borderColor": "000000",
                                            "bgColor": "5856d6",
                                            "type": "UIButton",
                                            "views": [
                                                {
                                                    "superClass": "NSObject",
                                                    "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                                    "frame": "{ x: 92.000000, y: 470.000000, width: 243.000000 , height: 130.000000 }",
                                                    "borderColor": "000000",
                                                    "bgColor": "000000",
                                                    "type": "_UISystemBackgroundView",
                                                    "views": [
                                                        {
                                                            "superClass": "NSObject",
                                                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                                            "frame": "{ x: 92.000000, y: 470.000000, width: 243.000000 , height: 130.000000 }",
                                                            "borderColor": "000000",
                                                            "bgColor": "007aff",
                                                            "type": "UIView",
                                                            "views": []
                                                        }
                                                    ]
                                                },
                                                {
                                                    "fontSize": 17,
                                                    "superClass": "NSObject",
                                                    "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                                    "frame": "{ x: 160.000000, y: 524.666667, width: 106.666667 , height: 20.333333 }",
                                                    "fontName": ".SFUI-Regular",
                                                    "text": "Go To Next ->",
                                                    "borderColor": "000000",
                                                    "bgColor": "000000",
                                                    "type": "UILabel",
                                                    "views": []
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "superClass": "NSObject",
                    "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                    "frame": "{ x: 0.000000, y: 47.000000, width: 390.000000 , height: 44.000000 }",
                    "borderColor": "000000",
                    "bgColor": "000000",
                    "type": "UINavigationBar",
                    "views": [
                        {
                            "superClass": "NSObject",
                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                            "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 91.000000 }",
                            "borderColor": "000000",
                            "bgColor": "000000",
                            "type": "_UIBarBackground",
                            "views": [
                                {
                                    "superClass": "NSObject",
                                    "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                    "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 91.000000 }",
                                    "borderColor": "000000",
                                    "bgColor": "000000",
                                    "type": "UIVisualEffectView",
                                    "views": [
                                        {
                                            "superClass": "NSObject",
                                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                            "frame": "{ x: 0.000000, y: 0.000000, width: 390.000000 , height: 91.000000 }",
                                            "borderColor": "000000",
                                            "bgColor": "000000",
                                            "type": "_UIVisualEffectBackdropView",
                                            "views": []
                                        }
                                    ]
                                },
                                {
                                    "superClass": "NSObject",
                                    "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                    "frame": "{ x: 0.000000, y: 91.000000, width: 390.000000 , height: 0.333333 }",
                                    "borderColor": "000000",
                                    "bgColor": "000000",
                                    "type": "_UIBarBackgroundShadowView",
                                    "views": [
                                        {
                                            "superClass": "NSObject",
                                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                                            "frame": "{ x: 0.000000, y: 91.000000, width: 390.000000 , height: 0.333333 }",
                                            "borderColor": "000000",
                                            "bgColor": "000000",
                                            "type": "_UIBarBackgroundShadowContentImageView",
                                            "views": []
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "superClass": "NSObject",
                            "margin": "{ top: 0.000000, left: 16.000000, bottom: 0.000000 , right: 16.000000 }",
                            "frame": "{ x: 0.000000, y: 47.000000, width: 390.000000 , height: 44.000000 }",
                            "borderColor": "000000",
                            "bgColor": "000000",
                            "type": "_UINavigationBarContentView",
                            "views": []
                        },
                        {
                            "superClass": "NSObject",
                            "margin": "{ top: 8.000000, left: 8.000000, bottom: 8.000000 , right: 8.000000 }",
                            "frame": "{ x: 0.000000, y: 47.000000, width: 0.000000 , height: 0.000000 }",
                            "borderColor": "000000",
                            "bgColor": "000000",
                            "type": "UIView",
                            "views": []
                        }
                    ]
                }
            ]
        }];

        //PARSE AND BUILD
        const btn = createButton({
            text: "hello",
            fontFamily: "arial",
            fontStyle: "normal",
            fontSize: "20px",
            fontWeight: "bold",
            fontColor: "#000000",
            frame: {
                top: 524,
                left: 160,
                width: 106,
                height: 20
            }
        });
        mainContent.appendChild(btn);
    }
}

const createButton = (btnJson) => {
    const btn = new Button(btnJson);
    btn.createElement();
    return btn.getElement();
}

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


class Button extends BaseElement {
    constructor(json) {
        super(json);
    }

    createElement() {
        this.element = document.createElement('button');
        this.element.innerText = this.json.text;
        return super.createElement();
    }
}

window.onload = createMainContent;

