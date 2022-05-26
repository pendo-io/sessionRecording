const createButton = (button) => {
    const btn = new Button(button);
    btn.createElement();
    return btn.getElement();
}

const createView = (view) => {
    const myView = new View(view);
    myView.createElement();
    return myView.getElement();
}

const createLabel = (lbl) => {
    const label = new Label(lbl);
    label.createElement();
    return label.getElement();
}

const createImage = (img) => {
    const image = new Image(img);
    image.createElement();
    return image.getElement();
}

const createTextField = (tf) => {
    const textField = new TextField(tf);
    textField.createElement();
    return textField.getElement();
}

const play = async (eventsArray) => {
    if (eventsArray == null || eventsArray.length === 0) {
        return;
    }

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const startTime = eventsArray[0].device_time;
    for (const event of eventsArray) {
        let time = Math.trunc((event.device_time - startTime) / 1000);
        if(time > 10 || time < 0) {
            time = 2;
        }
        console.warn('waiting for ' + time + ' seconds');
        await sleep(time * 1000);
        if (event.event === 'RAScreenView') {
            let screenEvent = event.data.retroactiveScreenData.sessionRecording;
            //Animations instead
            clearScreen();
            drawScreen([screenEvent], mainContent);
        } else if(event.event === 'RAClick') {
            let clickEvent = event.data.sessionRecording;
            drawClick(clickEvent);
        }
    }
}

const drawClick = (clickData) => {
    let clickPosition = clickData.clickLocation;
    if(clickPosition == null) {
        console.warn('no click location');
        return;
    }
    console.warn('drawClick ' + JSON.stringify(clickPosition));
    let posX = Math.trunc(clickPosition.x * sizeFactor);
    let posY = Math.trunc(clickPosition.y * sizeFactor);

    let dot = document.getElementById('dot');
    if(dot == null) {
        dot = document.createElement("span");
        dot.id = 'dot';
        dot.className = 'circle'
        mainContent.appendChild(dot);
    }
    dot.style.visibility = 'visible';
    dot.style.top = posY + "px";
    dot.style.left = posX + "px";
    setTimeout(() => {
        dot.style.visibility = 'hidden';
    }, 1000)
};

const clearScreen = () => {
    console.warn('clearScreen');
    mainContent.innerHTML = '';
}

const drawScreen = (viewsArray, container, zIndex = 900) => {
    if (viewsArray == null || viewsArray.length === 0) {
        return;
    }
    console.warn('drawScreen ' + viewsArray);
    viewsArray.forEach(view => {
        delete view.superClass;
        if(view.bgColor && view.bgColor.length === 8 && view.bgColor.endsWith('00')) {
            console.warn('opacity ignore')
        } else if (ViewTypesToIgnore.includes(view.type)) {
             // drawScreen(view.views, container, zIndex);
        } else {
            let child;
            switch (view.type) {
                case ViewTypes.UIButton:
                case ViewTypes.UIButtonLabel:
                    child = createButton(view);
                    break;
                case ViewTypes.UILabel:
                    child = createLabel(view);
                    break;
                case ViewTypes.UIImageView:
                    child = createImage(view);
                    break;
                case ViewTypes.UITextField:
                    child = createTextField(view);
                    break;
                case ViewTypes.UIViewControllerWrapperView:
                case ViewTypes.UILayoutContainerView:
                case ViewTypes.UINavigationTransitionView:
                case ViewTypes.UIView:
                default:
                    child = createView(view);
                    break;
            }
            child.style.zIndex = zIndex++ + '';
            // UIButton
            if (container !== mainContent) {
                child.style.position = 'unset';
            }
            let newContainer;
            if (view.type === ViewTypes.UIButton) {
                // container = child; //UIButton.
                newContainer = child;
            } else {
                newContainer = mainContent;
            }
            container.appendChild(child);

            drawScreen(view.views, newContainer, zIndex);
        }
    });
}