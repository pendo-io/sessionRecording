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

const parseAndBuild = (viewsArray, container, zIndex = 900) => {
    if (viewsArray == null || viewsArray.length === 0) {
        return;
    } else {
        viewsArray.forEach(view => {
            delete view.superClass;
            // do something with element
            // types that need special handling
            // types that should be ignored
            // types that require merging
            if (ViewTypesToIgnore.includes(view.type)) {
                // parseAndBuild(view.views, container, zIndex);
            } else if (view.frame && view.frame.width === 0 || view.frame.height === 0) {
                parseAndBuild(view.views, container);
            } else {
                let child;
                switch (view.type) {
                    case ViewTypes.UIButton:
                        child = createButton(view);
                        break;
                    case ViewTypes.UILabel:
                        child = createLabel(view);
                        break;
                    case ViewTypes.UIViewControllerWrapperView:
                    case ViewTypes.UILayoutContainerView:
                    case ViewTypes.UINavigationTransitionView:
                    case ViewTypes.UIView:
                    default:
                        child = createView(view);
                        break;
                }
                child.style.zIndex = zIndex++;
                // container.appendChild(child);
                let newContainer = null;
                if (view.type === ViewTypes.UIButton) {
                    // container = child; //UIButton.
                    newContainer = child;
                } else {
                    newContainer = mainContent;
                }
                container.appendChild(child);

                parseAndBuild(view.views, newContainer, zIndex);
            }
        });
    }
}