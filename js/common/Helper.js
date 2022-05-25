const createButton = (btnJson) => {
    const btn = new Button(btnJson);
    btn.createElement();
    return btn.getElement();
}

const createView = (divJson) => {
    const div = new View(divJson);
    div.createElement();
    return div.getElement();
}

const createLabel = (labelJson) => {
    const label = new Label(labelJson);
    label.createElement();
    return label.getElement();
}

const parseAndBuild = (viewsArray) => {
    if (viewsArray === null || viewsArray.length === 0) {
        return;
    } else {
        viewsArray.forEach(view => {
            delete view.superClass;
            console.warn(view.type);
            console.warn(view);
            // do something with element
            // types that need special handling
            // types that should be ignored
            // types that require merging
            if (view.type.startsWith('_')) {
                parseAndBuild(view.views);
            } else {
                switch (view.type) {
                    case ViewTypes.UIButton:
                        const btn = createButton(view);
                        mainContent.appendChild(btn);
                        break;
                    case ViewTypes.UILabel:
                        const label = createLabel(view);
                        mainContent.appendChild(label);
                        break;
                    case ViewTypes.UIViewControllerWrapperView:
                    case ViewTypes.UILayoutContainerView:
                    case ViewTypes.UINavigationTransitionView:
                    case ViewTypes.UIView:
                    default:
                        const defaultDiv = createView(view);
                        mainContent.appendChild(defaultDiv);
                }
                parseAndBuild(view.views);
            }
        });
    }
}