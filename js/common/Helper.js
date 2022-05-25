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

const play = async (eventsArray) => {
    if (eventsArray == null || eventsArray.length === 0) {
        return;
    }

    const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
    const startTime = eventsArray[0].device_time;
    for (const event of eventsArray) {
        let time = Math.trunc((event.device_time - startTime) / 1000);
        await sleep(time);
        if (event.event === 'RAScreenView') {
            let screenEvent = event.data.retroactiveScreenData.sessionRecording;
            clearScreen();
            drawScreen([screenEvent], mainContent);
        } else if(event.event === 'RAClick') {
            let clickEvent = event.data.sessionRecording;
            drawClick(clickEvent);
        }
    }
}

const drawClick = (clickData) => {

    // const animateScaling = anime({
    //     targets: '.square',
    //     scale: 0.8,
    // });

    let clickPosition = clickData.position;

    console.warn(clickPosition);
};

const clearScreen = () => {
    mainContent.innerHTML = '';
}

const drawScreen = (viewsArray, container, zIndex = 900) => {
    if (viewsArray == null || viewsArray.length === 0) {
        return;
    }
    viewsArray.forEach(view => {
        delete view.superClass;
        // do something with element
        // types that need special handling
        // types that should be ignored
        // types that require merging
        if (ViewTypesToIgnore.includes(view.type)) {
            // parseAndBuild(view.views, container, zIndex);
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